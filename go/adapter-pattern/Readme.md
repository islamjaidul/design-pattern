# Go Adapter Pattern Example

## Summary

This project demonstrates the use of the **Adapter** design pattern in Go to enable compatibility between different SQL providers (like MySQL and PostgreSQL) and a third-party API service. The pattern allows the `Client` to interact with these different data sources through a unified interface, making the code flexible, extensible, and easy to maintain.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [How to run](#how-to-run)
- [Benefits](#benefits)

## Overview

The **Adapter** pattern is a structural design pattern that allows objects with incompatible interfaces to work together. In this example, we use adapters to enable a `Client` object to execute SQL queries across multiple databases (MySQL, PostgreSQL) and even through a third-party API service. The client code remains agnostic to the specifics of each data source, adhering to a common interface.

## Project Structure

The project consists of the following files:


### Files

- **`main.go`**: The entry point of the application, where the client utilizes different adapters to execute a SQL query.
- **`interface.go`**: Defines the `SqlProvider` interface that all adapters must implement.
- **`mysql_adapter.go`**: Implements the `SqlProvider` interface for MySQL.
- **`postgres_adapter.go`**: Implements the `SqlProvider` interface for PostgreSQL.
- **`third_party_adapter.go`**: Implements the `SqlProvider` interface for a third-party API.

## How to Run
   ```bash
   go run .
   ```

## Expected output
MySQL query executed - SELECT * FROM users
Postgres query executed - SELECT * FROM users
Third party query executed - SELECT * FROM users

## Benefits
- Flexibility: Easily switch between different data sources (MySQL, PostgreSQL, or a third-party API) without altering the client code.
- Extensibility: New data sources can be added by creating new adapters that implement the SqlProvider interface.
- Maintainability: Keeps the client code decoupled from the specific implementation details of the data sources, making the codebase easier to maintain and extend.
- Separation of Concerns: Isolates the specifics of how queries are executed from the rest of the application logic.

