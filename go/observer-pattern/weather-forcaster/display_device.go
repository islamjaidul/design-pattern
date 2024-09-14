package main

import "fmt"

type PhoneDisplay struct {
	name string
}

func (p *PhoneDisplay) Update(temperature float64) {
	fmt.Printf("%s received weather update: Temperature is now %.2f°C\n", p.name, temperature)
}

// ComputerDisplay is another device that observes weather changes
type ComputerDisplay struct {
	id string
}

// Update method to receive temperature updates from WeatherStation
func (c *ComputerDisplay) Update(temperature float64) {
	fmt.Printf("Computer %s received weather update: Temperature is now %.2f°C\n", c.id, temperature)
}
