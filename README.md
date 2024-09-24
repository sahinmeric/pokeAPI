# PokeAPI NestJS Project

This project is a simple Node.js-based API built using the NestJS framework. It connects to the **PokéAPI** to fetch data about Pokémon, such as their names, types, and translated type names.

## Live Demo

The application is deployed and live at:  
[https://pokeapi-nest.onrender.com](https://pokeapi-nest.onrender.com)

## Available Endpoints

### Get the First 100 Pokémon

- **GET** `/api/pokemon`
- Fetches a list of the first 100 Pokémon, including their names and URLs.

#### Example Request:

```bash
GET /api/pokemon
```
