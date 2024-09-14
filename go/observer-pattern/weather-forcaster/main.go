package main

import "fmt"

func main() {
	// Subject
	station := &WeatherStation{}

	// Create observers (display devices)
	phone := &PhoneDisplay{name: "Phone"}
	computer := &ComputerDisplay{id: "PC-1"}

	// Register observers to the weather station
	station.AddObserver(phone)
	station.AddObserver(computer)

	// Simulate a temperature change
	station.SetTemperature(22.5)

	fmt.Println("REMOVING phone...")

	// Remove one observer and update temperature again
	station.RemoveObserver(phone)
	station.SetTemperature(25.0)
}
