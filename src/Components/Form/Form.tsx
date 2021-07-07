import React, {ReactElement, useState} from "react";
// import Deposit from "../Filters/Deposit/Deposit";
import RadioGroup from "../RadioGroup/RadioGroup";
import {FilterInterface} from "../../Interfaces/FilterInterface";
// import Withdrawal from "../Filters/Withdrawal/Withdrawal";
import { Button } from "@material-ui/core";
import { TransactionType } from "../../Interfaces/Types";
import {HandleRadioChange} from "../../Interfaces/RadioInterface";
import Payments from "../Filters/Payments/Payments";

const Form = (): ReactElement => {
    const [transaction, setTransaction] = useState<TransactionType>('deposit')
    const generateDefaultState = (): FilterInterface => {
            const filterMarkup = {
                status: [],
                id: '',
                username: '',
                currencies: []
            }

            if (transaction === 'withdrawal') return {...filterMarkup, isLocked: []}
            return {...filterMarkup}
    }
    const [filter, setFilter] = useState<FilterInterface>(generateDefaultState())

    const clearFilters = (currType: TransactionType): void => {
        setFilter(((prevState: FilterInterface): FilterInterface => {
            const filterMarkup = {
                status: [],
                id: '',
                username: '',
                currencies: []
            }

            console.log()
            if (currType === 'deposit') return {...filterMarkup}
            if (currType === 'withdrawal') return {...filterMarkup, isLocked: []}

            return prevState
        }))
    }

    //mustuppdate
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

    const handleSubmit = () => {
        console.log()
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
            {/*        />*/}
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