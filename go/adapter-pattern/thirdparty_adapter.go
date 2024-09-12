package main

import "fmt"

type ThirdPartyAdapter struct {
	API        string
	APIKey     string
	Body       string
	HTTPMethod string
}

func (p *ThirdPartyAdapter) Query(query string) {
	p.API = "http://exampleapi.com"
	p.APIKey = "apikey**"
	p.Body = query
	p.HTTPMethod = "POST"

	// Will call REST call for third party to execute my query
	fmt.Println("Third party query executed -", query)
}
