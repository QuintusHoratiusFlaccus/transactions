import React, {ReactElement, useState} from "react";
// import Deposit from "../Filters/Deposit/Deposit";
import RadioGroup from "../RadioGroup/RadioGroup";
import {FilterInterface, Withdrawal as TypeWithdrawal, Deposit as TypeDeposit} from "../../Interfaces/FilterInterface";
// import Withdrawal from "../Filters/Withdrawal/Withdrawal";
import { Button } from "@material-ui/core";
import { TransactionType } from "../../Interfaces/Types";
import {HandleRadioChange} from "../../Interfaces/RadioInterface";
import Payments from "../Filters/Payments/Payments";
import {api} from "../../Services/api";
import {toDepositReqType} from "../../Functions/changeToReqType";

const Form = (): ReactElement => {
    const [transaction, setTransaction] = useState<TransactionType>('deposit')
    const generateDefaultState = (): FilterInterface => {
            const filterMarkup = {
                status: [],
                id: '',
                username: '',
                currency: []
            } as TypeDeposit

            if (transaction === 'withdrawal') return {...filterMarkup, isLocked: []} as TypeWithdrawal
            return {...filterMarkup}
    }
    //TODO it's be okay?
    const [filter, setFilter] = useState<FilterInterface>(generateDefaultState())

    const clearFilters = (currType: TransactionType): void => {
        setFilter(((prevState: FilterInterface): FilterInterface => {
            const filterMarkup = {
                status: [],
                id: '',
                username: '',
                currency: []
            }

            console.log()
            if (currType === 'deposit') return {...filterMarkup}
            if (currType === 'withdrawal') return {...filterMarkup, isLocked: []}

            return prevState
        }))
    }

    //TODO change function props
    const handleFilterChange = (e: React.ChangeEvent<{ value: unknown, name: string }>): void => {
        setFilter((prevState: FilterInterface) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleRadioChange = (e: HandleRadioChange): void => {
        clearFilters(e.target.value as TransactionType)
        setTransaction(e.target.value as TransactionType)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        let resp
        if (transaction === 'deposit') {
            resp = await api.getDeposits(toDepositReqType({...filter}))
        }
        if (transaction === 'withdrawal') {
            console.log('ha')
        }

        console.log(resp)
    }

    return(
        <form onSubmit={handleSubmit}>
            <RadioGroup
                transaction={transaction}
                handleRadioChange={handleRadioChange}
            />
            {/*{*/}
            {/*    transaction === 'withdrawal' ?*/}
            {/*        <Withdrawal*/}
            {/*            filterState={filter as TypeWithdrawal}*/}
            {/*            handleFilterChange={handleFilterChange}*/}
            {/*        />*/}
            {/*        :*/}
            {/*        <Deposit*/}
            {/*            filterState={filter as TypeDeposit}*/}
            {/*            handleFilterChange={handleFilterChange}*/}
            {/*            TODO does it right solution?        />*/}
            {/*}*/}
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