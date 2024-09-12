package main

import "fmt"

type MySQLAdapter struct {
	Host     string
	Username string
	Password string
	Port     string
}

func (m *MySQLAdapter) Query(query string) {
	m.Host = "http://localhost"
	m.Username = "root"
	m.Password = "password"
	m.Port = "3306"
	// Maybe we can do some other operation to execute the operation here
	fmt.Println("MySQL query executed -", query)
}
