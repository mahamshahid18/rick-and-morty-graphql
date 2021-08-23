const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Character {
    id: ID
    name: String
    status: String
    species: String
    gender: String
    origin: Location
    location: Location
    image: String
    episode: [Episode]!
  }
  
  type Episode {
    name: String
    air_date: String
  }

  type Location {
    name: String
    type: String
    dimension: String
  }

  type CharactersList {
    results: [Character]
  }

  type FavoriteCharacter {
    id: ID
    username: String
  }

  type FavoriteCharactersList {
    favorites: [FavoriteCharacter]
  }

  type User {
    username: String
  }

  type Query {
    charactersList: CharactersList
    favoritesList(username: String): FavoriteCharactersList
    user(username: String): User
  }

  type Mutation {
    addFavoriteCharacter(id: String, username: String): FavoriteCharacter
    addUser(username: String): User
  }
`;

module.exports = typeDefs;