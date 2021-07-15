import React, {ReactElement, SyntheticEvent, useEffect, useState} from "react";
import RadioGroup from "../RadioGroup/RadioGroup";
import {FilterInterface, WithdrawalFilter} from "../../Interfaces/FilterInterface";
import {Button} from "@material-ui/core";
import {TransactionType} from "../../Interfaces/Types";
import {RadioChangeEvent} from "../../Interfaces/RadioInterface";
import Payments from "../Filters/Payments/Payments";
import {toDepositReqType, toWithdrawalReqType} from "../../Functions/changeToReqType";
import {generateDefaultState} from "../../Functions/generateDefaultState";
import {FilterChangeEvent} from "../../Interfaces/DefaultTransactionsInterface";
import {DepositStatus} from "../../Statuses/DepositStatus";
import {WithdrawalStatus} from "../../Statuses/WithdrawalStatus";
import {useLazyQuery} from "@apollo/client";
import {GET_USER} from "../../Queries/user";
import {GET_WITHDRAWAL} from "../../Queries/withdrawal";
import {GET_DEPOSIT} from "../../Queries/deposit";
import useDebounce from "../../Hooks/useDebounce";

const Form = (): ReactElement => {
    //queries
    const [UserIdByName, {data: playerId}] = useLazyQuery(GET_USER)
    const [Deposits, {data: depositsResp}] = useLazyQuery(GET_DEPOSIT)
    const [Withdrawals, {data: withdrawalsResp}] = useLazyQuery(GET_WITHDRAWAL)
    //states
    const [transaction, setTransaction] = useState<TransactionType>('deposit')
    const [filter, setFilter] = useState<FilterInterface>(generateDefaultState(transaction))
    const debouncedValue: string = useDebounce(filter.username, 1000)

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



        if (transaction === 'deposit') {
            Deposits(
                {
                variables: toDepositReqType(
                    {
                            status: filter.status as DepositStatus[],
                            id: filter.id,
                            currency: filter.currency,
                            playerId: playerId?.UserIdByName?.id
                        }
                    )
                }
            )
        }

        if (transaction === 'withdrawal') {
            Withdrawals(
                {
                    variables: toWithdrawalReqType(
                        {
                            status: filter.status as WithdrawalStatus[],
                            id: filter.id,
                            playerId: playerId.UserIdByName?.id,
                            currency: filter.currency,
                            isLocked: (filter as WithdrawalFilter).isLocked
                        }
                    )
                }
            )
        }
    }

    useEffect(() => {
        if(debouncedValue) {
            UserIdByName({variables: {name: debouncedValue}})
        }
    }, [debouncedValue])

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