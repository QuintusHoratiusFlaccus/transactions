import {gql} from "@apollo/client";

export const GET_WITHDRAWAL = gql`
    query GetWithdrawals(
        $filter: WithdrawalFilters
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