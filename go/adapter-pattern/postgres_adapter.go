package main

import "fmt"

type PostgresAdapter struct {
	Host     string
	Username string
	Password string
	Port     string
}

func (p *PostgresAdapter) Query(query string) {
	p.Host = "http://localhost"
	p.Username = "root"
	p.Password = "password"
	p.Port = "5432"
	// Maybe we can do some other operation to execute the operation here
	fmt.Println("Postgres query executed -", query)
}
