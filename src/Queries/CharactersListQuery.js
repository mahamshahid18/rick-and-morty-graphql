import { gql } from '@apollo/client';

export const CHARACTERS_LIST_QUERY = gql`
  query Query {
    charactersList {
      results {
        id
        name
        status
        species
        gender
        image
        location {
            name
            type
            dimension
        }
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
