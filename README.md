# PokeAPI NestJS Project

This project is a simple Node.js-based API built using the NestJS framework. It connects to the **PokéAPI** to fetch data about Pokémon, such as their names, types, and translated type names.

## Live Demo

The application is deployed and live at:  
[https://pokeapi-nest.onrender.com/api/pokemon](https://pokeapi-nest.onrender.com/api/pokemon)

## Available Endpoints
- **GET** `https://pokeapi-nest.onrender.com/api/pokemon` - Fetches a list of the first 100 Pokémon, including their names and URLs.
- **GET** `https://pokeapi-nest.onrender.com/api/pokemon/:id` - Fetches details about a specific Pokémon by its ID.
- **GET** `https://pokeapi-nest.onrender.com/api/pokemon/pokemonAndTypes/:id` - Fetches the Pokémon along with its types, and provides translations for each type (currently in Spanish and Japanese).


#### Example Request:

```bash
GET https://pokeapi-nest.onrender.com/api/pokemon
```
Fetches a list of the first 100 Pokémon, including their names and URLs.
```bash
[
  {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/"
  },
  {
    "name": "ivysaur",
    "url": "https://pokeapi.co/api/v2/pokemon/2/"
  }
  // ...
]
```

```bash
GET https://pokeapi-nest.onrender.com/api/pokemon/1
```
Fetches details about a specific Pokémon by its ID.
```bash
{
  "name": "bulbasaur",
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ]
}
```
```bash
GET https://pokeapi-nest.onrender.com/api/pokemon/pokemonAndTypes/1
```
Fetches the Pokémon along with its types, and provides translations for each type (currently in Spanish and Japanese).
```bash
{
  "name": "bulbasaur",
  "types": [
    {
      "name": "grass",
      "translations": [
        { "language": "es", "name": "Planta" },
        { "language": "ja", "name": "くさ" }
      ]
    },
    {
      "name": "poison",
      "translations": [
        { "language": "es", "name": "Veneno" },
        { "language": "ja", "name": "どく" }
      ]
    }
  ]
}
```

## Getting Started

### Prerequisites
To run this project locally, you’ll need:
- **Node.js**: >= v14
- **NestJS**: >= v8
- **npm**: Node's package manager for installing dependencies

### Installation

### 1. Clone the repository:

   ```bash
   git clone https://github.com/sahinmeric/pokeAPI.git
   cd pokeAPI
  ```
### 2. Install the dependencies:

   ```bash
   npm install
  ```
### 3. Build the project:

   ```bash
   npm run build
  ```
### 4. Start the application:

   - **Development**:
     ```bash
     npm run start:dev
     ```

   - **Production**:
     ```bash
     npm run start:prod
     ```

   The API will be running at `http://localhost:3000`.
### 5. Running Tests

This project uses **Jest** for unit testing. You can run tests using the following command:

   ```bash
   npm run test
  ```
### 6. Deployment

The project is currently deployed on Render. You can deploy it on your own by following these steps:

1. Push your code to GitHub.
2. Create a new service on [Render](https://render.com) by linking your GitHub repository.
3. Set up the build and start commands:
   - **Build command**: `npm run build`
   - **Start command**: `npm run start:prod`
4. Render will automatically deploy your app and provide a live URL.

### 7. License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
