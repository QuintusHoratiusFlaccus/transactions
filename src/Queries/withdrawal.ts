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
            filter: $filter
        ) {
            status
            id
            playerId
            currency
            isLocked
        }
    }
`