import React, {ReactElement, SyntheticEvent, useState} from "react";
import RadioGroup from "../RadioGroup/RadioGroup";
import {FilterInterface, WithdrawalFilter} from "../../Interfaces/FilterInterface";
import {Button} from "@material-ui/core";
import {TransactionType} from "../../Interfaces/Types";
import {RadioChangeEvent} from "../../Interfaces/RadioInterface";
import Payments from "../Filters/Payments/Payments";
import {toDepositReqType, toWithdrawalReqType} from "../../Functions/changeToReqType";
import {generateDefaultState} from "../../Functions/generateDefaultState";
import {FilterChangeEvent} from "../../Interfaces/DefaultTransactionsInterface";
import {
    DepositStatus, GetDepositsQueryVariables, GetWithdrawalsQueryVariables,
    useGetDepositsLazyQuery,
    useGetUserIdByNameLazyQuery,
    useGetWithdrawalsLazyQuery
} from "../../generated";
import {WithdrawalStatus} from "../../generated";

const Form = (): ReactElement => {
    const getTransactions = (userId?: string | null): void => {
        if (transaction === 'deposit') {
            getDeposits(
                {
                    variables: {filter: toDepositReqType({
                                status: filter.status as DepositStatus[],
                                id: filter.id,
                                currency: filter.currency,
                                ...(userId && { playerId: userId }),
                    })}
                }
            )

            return;
        }

        getWithdrawals(
            {
                variables: { filter: toWithdrawalReqType({
                            status: filter.status as WithdrawalStatus[],
                            id: filter.id,
                            currency: filter.currency,
                            isLocked:(filter as WithdrawalFilter).isLocked,
                            ...(userId && {playerId: userId}),
                })}
            }
        )
    }

    //queries
    const [getUserIdByName] = useGetUserIdByNameLazyQuery({ onCompleted: (data) => {
        const userId = data.UserIdByName?.id;

        getTransactions(userId);
    } })
    const [getDeposits] = useGetDepositsLazyQuery({ onCompleted: (data) => {
        console.log('--->>> data <<<---', data);
        } })
    const [getWithdrawals] = useGetWithdrawalsLazyQuery({ onCompleted: (data) => {
            console.log('--->>> data <<<---', data);
        } })
    //states
    const [transaction, setTransaction] = useState<TransactionType>('deposit')
    const [filter, setFilter] = useState<FilterInterface>(generateDefaultState(transaction))

    const clearFilters = (currType: TransactionType): void => {
        setFilter(generateDefaultState(currType))
    }

    const handleFilterChange = (e: FilterChangeEvent): void => {
        setFilter((prevState: FilterInterface) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleRadioChange = (e: RadioChangeEvent): void => {
        const event = e.target.value as TransactionType
        clearFilters(event)
        setTransaction(event)
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        if (filter.username) {
            getUserIdByName({ variables: { name: filter.username } });

            return;
        }

        getTransactions();
    }

    return (
        <form onSubmit={handleSubmit}>
            <RadioGroup
                transaction={transaction}
                handleRadioChange={handleRadioChange}
            />
            <Payments
                filterState={filter}
                handleFilterChange={handleFilterChange}
                transaction={transaction}
            />
            <Button
                onClick={() => clearFilters(transaction)}
                variant="contained"
                color="primary"
            >
                CLEAR Filters
            </Button>
            <Button variant="contained" color="primary" type="submit">
                REFRESH
            </Button>
        </form>
    )
}

// export default compose(
//     graphql(GET_USER, {name: 'userData'}),
//     graphql(GET_DEPOSIT, {name: 'depositData', options: ({playerId: {playerId}}) => ({variables: {playerId}}) }),
//     graphql(GET_WITHDRAWAL, {name: 'withdrawalData', options: ({playerId: {playerId}}) => ({variables: {playerId}}) })
// )(Form)

export default Form