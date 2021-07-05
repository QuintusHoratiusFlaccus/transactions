import React, {useState} from "react";
import Deposit from "../Filters/Deposit/Deposit";
import RadioGroup from "../RadioGroup/RadioGroup";
import {FilterInterface} from "../../Interfaces/FilterInterface";
import Withdrawal from "../Filters/Withdrawal/Withdrawal";

function Form() {
    const [transaction, setTransaction] = useState<string>('deposit')
    const [filter, setFilter] = useState<FilterInterface>({
        status: [],
        id: '',
        username: '',
        currencies: []
    })

    const handleFilterChange = (e: React.ChangeEvent<{ value: unknown, name: string }>): void => {
        setFilter((prevState: FilterInterface) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleRadioChange = (e: React.ChangeEvent): void => {

        setTransaction(e.target.attributes[2].value)
    }

    return(
        <>
            <RadioGroup
                transaction={transaction}
                handleRadioChange={handleRadioChange}
            />
            {
                transaction === 'deposit' ?
                    <Deposit
                        filterState={filter}
                        handleFilterChange={handleFilterChange}
                    />
                    :
                    <Withdrawal
                        filterState={filter}
                        handleFilterChange={handleFilterChange}
                    />
            }

        </>
    )
}

export default Form