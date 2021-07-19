import { gql } from "@apollo/client";
export const GET_DEPOSIT = gql`
    query GetDeposits(
        $filter: DepositFilters
    ) {
        Deposits(
            filter: $filter
        ) {
            status
            id
            playerId
            currency
        }
    }
`