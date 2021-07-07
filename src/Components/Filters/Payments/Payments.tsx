import DefaultSelect from "../DefaultSelect/DefaultSelect"
import { TextField } from "@material-ui/core";
import {currencies} from "../../../Constants/Currencies";
import {WithdrawalArr} from "../../../Statuses/WithdrawalStatus";
import {DepositArr} from "../../../Statuses/DepositStatus";
import {isLocked} from "../../../Constants/isLocked";
import {IPayments} from "../../../Interfaces/Payments";
import {ReactElement} from "react";

const Payments = ({handleFilterChange, filterState, transaction}:IPayments): ReactElement => {

    const checkTransactionType = <T extends any>(depositValue: T, withdrawalValue: T): any => {
        if (transaction === 'deposit') return depositValue
        if (transaction === 'withdrawal') return withdrawalValue
    }

    return (
        <>
            <DefaultSelect
                placeholder="Status"
                base={checkTransactionType(DepositArr, WithdrawalArr)}
                selectState={filterState.status}
                handleFilterChange={handleFilterChange}
            />
            {
                checkTransactionType(null , <DefaultSelect
                    placeholder="Lock"
                    base={isLocked}
                    name="isLocked"
                    selectState={filterState.status}
                    handleFilterChange={handleFilterChange}
                />)
            }

            <TextField
                label="Platform Transaction ID"
                onChange={handleFilterChange}
                name="id"
                value={filterState.id}
            />
            <TextField
                label="Username"
                onChange={handleFilterChange}
                name="username"
                value={filterState.username}
            />
            <DefaultSelect
                placeholder="Currencies"
                base={currencies}
                selectState={filterState.currencies}
                handleFilterChange={handleFilterChange}
            />
        </>
    )
}

export default Payments