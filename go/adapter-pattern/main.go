package main

type Client struct{}

func (c *Client) Get(adapter SqlProvider, query string) {
	adapter.Query(query)
}

func main() {
	mysqlAdapter := &MySQLAdapter{}
	postgresAdapter := &PostgresAdapter{}
	thirdPartyAdapter := &ThirdPartyAdapter{}
	client := &Client{}
	query := "SELECT * FROM users"

	// See the beauty of changing adapter
	// And it will change the entire behavior polymorphically
	client.Get(mysqlAdapter, query)
	client.Get(postgresAdapter, query)
	client.Get(thirdPartyAdapter, query)
}
