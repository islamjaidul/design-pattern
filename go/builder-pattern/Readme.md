# DynamoDb Simulation

This project provides a simulation of interacting with AWS DynamoDB using Go. It includes a `DynamoDbProvider` interface and a `DynamoDbConfig` implementation to simulate querying DynamoDB and controlling result limits.

## Overview

The project demonstrates how to:

- Create and configure a `DynamoDbProvider`.
- Simulate fetching a single item and multiple items from DynamoDB.
- Control the number of results returned using a `Limit`.

## Components

### `DynamoDbProvider` Interface

The `DynamoDbProvider` interface defines methods for querying DynamoDB:

- `GetItemBySK(dp DynamoDbProvider, pk string, sk string) map[string]interface{}`: Fetches a single item using a primary key (`pk`) and a sort key (`sk`).
- `GetItemsByPK(dp DynamoDbProvider, pk string) []map[string]interface{}`: Fetches multiple items using a primary key (`pk`).

### `DynamoDbConfig` Struct

The `DynamoDbConfig` struct implements the `DynamoDbProvider` interface and includes configuration options:

- **Fields**:
  - `Limit`: The maximum number of items to return in `GetItemsByPK`.
  - `LastEvaluatedKey`: Simulates pagination by keeping track of the last evaluated key.

- **Methods**:
  - `NewDynamoDbProvider() *DynamoDbConfig`: Creates a new `DynamoDbConfig` with a default limit of 50.
  - `SetLimit(limit int)`: Sets the maximum number of items to return.
  - `SetLastEvaluatedKey(lastEvaluatedKey string)`: Sets the last evaluated key for pagination.
  - `GetItemBySK(dp DynamoDbProvider, pk string, sk string) map[string]interface{}`: Simulates fetching a single item.
  - `GetItemsByPK(dp DynamoDbProvider, pk string) []map[string]interface{}`: Simulates fetching multiple items and respects the `Limit`.

## Usage

1. **Create a New Provider**:

    ```go
    dynamoDbProvider := NewDynamoDbProvider()
    ```

2. **Fetch a Single Item**:

    ```go
    singleItem := dynamoDbProvider.GetItemBySK(dynamoDbProvider, "PK", "SK")
    fmt.Printf("Single item simulated result %v\n", singleItem)
    ```

3. **Fetch Multiple Items**:

    ```go
    multipleItems := dynamoDbProvider.GetItemsByPK(dynamoDbProvider, "PK")
    fmt.Printf("Multiple items simulated result %v\n", multipleItems)
    ```

4. **Set Limit**:

    ```go
    dynamoDbProvider.SetLimit(1)
    ```

5. **Fetch Multiple Items with Limit**:

    ```go
    multipleItems = dynamoDbProvider.GetItemsByPK(dynamoDbProvider, "PK")
    fmt.Printf("Single item simulated result due to use Limit %v\n", multipleItems)
    ```

## Example

Here is a simple `main` function demonstrating how to use the `DynamoDbConfig`:

```go
func main() {
    dynamoDbProvider := NewDynamoDbProvider()
    singleItem := dynamoDbProvider.GetItemBySK(dynamoDbProvider, "PK", "SK")
    multipleItems := dynamoDbProvider.GetItemsByPK(dynamoDbProvider, "PK")
    fmt.Printf("Single item simulated result %v\n", singleItem)
    fmt.Printf("Multiple items simulated result %v\n", multipleItems)

    // Set Limit and fetch items again
    dynamoDbProvider.SetLimit(1)
    multipleItems = dynamoDbProvider.GetItemsByPK(dynamoDbProvider, "PK")
    fmt.Printf("Single item simulated result due to use Limit %v\n", multipleItems)
}
