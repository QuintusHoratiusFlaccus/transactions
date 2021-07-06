import React, {useState} from "react";
import Deposit from "../Filters/Deposit/Deposit";
import RadioGroup from "../RadioGroup/RadioGroup";
import {FilterInterface} from "../../Interfaces/FilterInterface";
import Withdrawal from "../Filters/Withdrawal/Withdrawal";
import { Button } from "@material-ui/core";
import { transactionType } from "../../Interfaces/Types";
import {handleRadioChange} from "../../Interfaces/RadioInterface";

function Form() {
    const [transaction, setTransaction] = useState<transactionType>('deposit')
    const [filter, setFilter] = useState<FilterInterface>({
        status: [],
        id: '',
        username: '',
        currencies: []
    })

    const clearFilters = (currType: transactionType): void => {
        setFilter(((prevState: FilterInterface): FilterInterface => {
            const filterMarkup = {
                status: [],
                id: '',
                username: '',
                currencies: []
            }

            if (currType === 'deposit') return {...filterMarkup}
            if (currType === 'withdrawal') return {...filterMarkup, isLocked: []}

            return prevState
        }))
    }

    const handleFilterChange = (e: React.ChangeEvent<{ value: unknown, name: string }>): void => {
        setFilter((prevState: FilterInterface) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleRadioChange = (e: handleRadioChange): void => {
        clearFilters(e.target.value as transactionType)
        setTransaction(e.target.value as transactionType)
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
            {
                transaction === 'withdrawal' ?
                    <Withdrawal
                        filterState={filter}
                        handleFilterChange={handleFilterChange}
                    />
                    :
                    <Deposit
                        filterState={filter}
                        handleFilterChange={handleFilterChange}
                    />
            }
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