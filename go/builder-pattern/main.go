package main

import "fmt"

type DynamoDbProvider interface {
	GetItemBySK(dp DynamoDbProvider, pk string, sk string) map[string]interface{}
	GetItemsByPK(dp DynamoDbProvider, pk string) []map[string]interface{}
}

type DynamoDbConfig struct {
	Limit            int
	LastEvaluatedKey string
}

func NewDynamoDbBuilder() *DynamoDbConfig {
	return &DynamoDbConfig{Limit: 50}
}

func (d *DynamoDbConfig) SetLimit(limit int) *DynamoDbConfig {
	d.Limit = limit
	return d
}

func (d *DynamoDbConfig) SetLastEvaluatedKey(lastEvaluatedKey string) *DynamoDbConfig {
	d.LastEvaluatedKey = lastEvaluatedKey
	return d
}

func (d *DynamoDbConfig) GetItemBySK(dp DynamoDbProvider, pk string, sk string) map[string]interface{} {
	// Simulate querying AWS DynamoDB SDK and fetching data
	// map[string]interface{} is just for demonstration purpose
	data := make(map[string]interface{})
	data["name"] = "John"
	data["email"] = "john.doe@example.com"
	return data
}

func (d *DynamoDbConfig) GetItemsByPK(dp DynamoDbProvider, pk string) []map[string]interface{} {
	// Simulate querying AWS DynamoDB SDK and fetching data
	// []map[string]interface{} is just for demonstration purpose
	// It will use Limit to restrict the result
	item1 := make(map[string]interface{})
	item1["name"] = "John"
	item1["email"] = "john.doe@example.com"

	item2 := make(map[string]interface{})
	item2["name"] = "John Doe"
	item2["email"] = "john.doe@example.com"

	allItems := []map[string]interface{}{item1, item2}

	// We can get paginated data by calling recursively this method using LastEvaluatedKey and Limit
	// d.SetLastEvaluatedKey("some-key")

	limit := d.Limit
	if limit > 0 && limit < len(allItems) {
		return allItems[:limit]
	}

	return allItems
}

func main() {
	dynamoDbProvider := NewDynamoDbBuilder()
	singleItem := dynamoDbProvider.GetItemBySK(dynamoDbProvider, "PK", "SK")
	multipleItems := dynamoDbProvider.GetItemsByPK(dynamoDbProvider, "PK")
	fmt.Printf("Single item simulated result %v\n", singleItem)
	fmt.Printf("Multiple items simulated result %v\n", multipleItems)

	// Now we set Limit using builder pattern to restructure
	dynamoDbProvider.SetLimit(1)
	// Now we set LastEvaluatedKey and so on, depends on the configuration

	multipleItems = dynamoDbProvider.GetItemsByPK(dynamoDbProvider, "PK")
	fmt.Printf("Single item simulated result due to use Limit %v\n", multipleItems)
}
