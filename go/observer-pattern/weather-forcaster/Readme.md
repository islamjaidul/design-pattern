## Observer Pattern
The Observer pattern is a behavioral design pattern that defines a one-to-many relationship between objects. In this pattern, an object (known as the subject) maintains a list of its dependents (called observers) and notifies them automatically of any state changes, typically by calling one of their methods. This allows observers to respond to changes in the subject without the subject needing to know the specifics of the observers.

## Workflow
- weather_station.go 
    - This is the subject who is observe by observer who is consuming it's change
- display_change.go 
    - This is the observer / consumer who is consuming
- observer.go
    - This is the interface / contract between subject and observer
- main.go
    - station has one to many relation
    - station registered it's observer
    - if there is any temperature changes then all observer got notified

## How to Run
   ```bash
   go run .
   ```
