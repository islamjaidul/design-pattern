package main

type Observer interface {
	Update(temperature float64)
}
