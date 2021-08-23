import { gql } from '@apollo/client';

export const GET_FAVORITES_QUERY = gql`
    query GetFavoriteCharacters($username: String) {
        favoritesList(username: $username) {
            favorites {
                id
                username
            }
        }
    }`;

export const ADD_FAVORITE_MUTATION = gql`
    mutation AddFavoriteCharacter($id: String, $username: String) {
        addFavoriteCharacter(id: $id, username: $username) {
            id
            username
        }
    }`;