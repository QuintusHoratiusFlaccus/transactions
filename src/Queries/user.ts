import { gql } from "@apollo/client";
export const GET_USER = gql`
    query GetUserIdByName($name: String!) {
        UserIdByName(name: $name) {
            id
        }
    }
`