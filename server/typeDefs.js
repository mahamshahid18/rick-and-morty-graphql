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

  type Query {
    charactersList: CharactersList
  }
`;

module.exports = typeDefs;