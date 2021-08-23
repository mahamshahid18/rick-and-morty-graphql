import { gql } from '@apollo/client';

export const USER_QUERY = gql`
    query GetUser($username: String) {
        user(username: $username) {
            username
        }
    }`;

export const USER_MUTATION = gql`
    mutation AddUser($username: String) {
        addUser(username: $username) {
            username
        }
    }`;
