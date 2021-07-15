import {gql} from "@apollo/client";

export const GET_WITHDRAWAL = gql`
    query GetWithdrawals(
        $status: [String!]
        $id: ID,
        $playerId: ID,
        $currency: [String!],
        $isLocked: Boolean
    ) {
        Withdrawals(
            status: $status,
            id: $id,
            playerId: $playerId,
            currency: $currency,
            isLocked: $isLocked
        ) {
            status
            id
            playerId
            currency
            isLocked
        }
    }
`