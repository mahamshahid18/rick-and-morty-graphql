import { gql } from '@apollo/client';

export const GET_CHARACTERS_LIST_QUERY = gql`
  query GetCharactersList {
    charactersList {
      results {
        id
        name
        status
        species
        gender
        image
        origin {
            name
            type
            dimension
        }
        episode {
            name
            air_date
        }
      }
    }
  }`;
