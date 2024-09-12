package main

type SqlProvider interface {
	Query(query string)
}
