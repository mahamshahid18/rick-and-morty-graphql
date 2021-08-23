import { gql } from '@apollo/client';

export const GET_USER_QUERY = gql`
    query GetUser($username: String) {
        user(username: $username) {
            username
        }
    }`;

export const ADD_USER_MUTATION = gql`
    mutation AddUser($username: String) {
        addUser(username: $username) {
            username
        }
    }`;
