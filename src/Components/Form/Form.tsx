import React, {ReactElement, SyntheticEvent, useState} from "react";
import RadioGroup from "../RadioGroup/RadioGroup";
import {FilterInterface} from "../../Interfaces/FilterInterface";
import { Button } from "@material-ui/core";
import { TransactionType } from "../../Interfaces/Types";
import {HandleRadioChange} from "../../Interfaces/RadioInterface";
import Payments from "../Filters/Payments/Payments";
import {api} from "../../Services/api";
import {toDepositReqType} from "../../Functions/changeToReqType";
import {generateDefaultState} from "../../Functions/generateDefaultState";
import { FilterChangeEvent } from "../../Interfaces/DefaultTransactionsInterface";

const Form = (): ReactElement => {
    const [transaction, setTransaction] = useState<TransactionType>('deposit')
    const [filter, setFilter] = useState<FilterInterface>(generateDefaultState(transaction))

    const clearFilters = (currType: TransactionType): void => {
        setFilter(((prevState: FilterInterface): FilterInterface => {
            const filterMarkup: FilterInterface = {
                status: [],
                id: '',
                username: '',
                currency: []
            }

            if (currType === 'deposit') return {...filterMarkup}
            if (currType === 'withdrawal') return {...filterMarkup, isLocked: []}

            return prevState
        }))
    }

    const handleFilterChange = (e: FilterChangeEvent): void => {
        setFilter((prevState: FilterInterface) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleRadioChange = (e: HandleRadioChange): void => {
        clearFilters(e.target.value as TransactionType)
        setTransaction(e.target.value as TransactionType)
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        //
        // let resp
        // if (transaction === 'deposit') {
        //     resp = await api.getDeposits(toDepositReqType({...filter}))
        // }
        // if (transaction === 'withdrawal') {
        //     console.log('ha')
        // }
        //
        // console.log(resp)
    }

    return(
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
                    CLEAR FILTERS
                </Button>
                <Button variant="contained" color="primary" type="submit">
                    REFRESH
                </Button>
        </form>
    )
}

export default Form