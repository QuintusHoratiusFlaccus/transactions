import { gql } from "@apollo/client";
export const GET_DEPOSIT = gql`
    query GetDeposits(
        $status: [String!]
        $id: ID,
        $playerId: ID,
        $currency: [String!]
    ) {
        Deposits(
            status: $status,
            id: $id,
            playerId: $playerId,
            currency: $currency
        ) {
            status
            id
            playerId
            currency
        }
    }
`