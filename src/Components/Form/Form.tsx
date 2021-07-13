import React, {ReactElement, SyntheticEvent, useState} from "react";
import RadioGroup from "../RadioGroup/RadioGroup";
import {FilterInterface, WithdrawalFilter} from "../../Interfaces/FilterInterface";
import {Button} from "@material-ui/core";
import {TransactionType} from "../../Interfaces/Types";
import {RadioChangeEvent} from "../../Interfaces/RadioInterface";
import Payments from "../Filters/Payments/Payments";
import {api} from "../../Services/api";
import {DepositPropsType, toDepositReqType, toWithdrawalReqType, WithdrawalPropsType} from "../../Functions/changeToReqType";
import {generateDefaultState} from "../../Functions/generateDefaultState";
import {FilterChangeEvent} from "../../Interfaces/DefaultTransactionsInterface";
import {currencies} from "../../Constants/Currencies";
import {UsernameResponse} from "../../Interfaces/apiTypes";
import {DepositStatus} from "../../Statuses/DepositStatus";
import {AxiosResponse} from "axios";
import {WithdrawalStatus} from "../../Statuses/WithdrawalStatus";

const Form = (): ReactElement => {
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

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()

        let response: unknown
        let playerId: string = ''

        if (filter.username) {
            playerId = (await api.getIdByUsername(filter.username)).data[0]?.id || ''
        }

        if (transaction === 'deposit') {
            response = await api.getDeposits(toDepositReqType(
                {
                    status: filter.status as DepositStatus[],
                    id: filter.id,
                    currency: filter.currency,
                    playerId
                }
            ))
        }

        if (transaction === 'withdrawal') {
            response = await api.getWithdrawal(toWithdrawalReqType(
                {
                    status: filter.status as WithdrawalStatus[],
                    id: filter.id,
                    playerId,
                    currency: filter.currency,
                    isLocked: (filter as WithdrawalFilter).isLocked
                }
            ))
        }

        console.log(response)
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

export default Form