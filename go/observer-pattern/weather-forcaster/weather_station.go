package main

// Subject that keeps track of observers and notifies them of changes
type WeatherStation struct {
	observers   []Observer
	temperature float64
}

// AddObserver adds a new observer to the weather station
func (w *WeatherStation) AddObserver(observer Observer) {
	w.observers = append(w.observers, observer)
}

func (w *WeatherStation) RemoveObserver(observer Observer) {
	for i, obs := range w.observers {
		if obs == observer {
			w.observers = append(w.observers[:i], w.observers[i+1:]...)
			break
		}
	}
}

// SetTemperature changes the temperature and notifies all observers
func (w *WeatherStation) SetTemperature(temperature float64) {
	w.temperature = temperature
	w.notifyObserver()
}

// notifyObservers notifies all observers of the change
func (w *WeatherStation) notifyObserver() {
	for _, obs := range w.observers {
		obs.Update(w.temperature)
	}
}
