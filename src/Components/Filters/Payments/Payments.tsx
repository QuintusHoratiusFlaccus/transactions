import DefaultSelect from "../DefaultSelect/DefaultSelect"
import { TextField } from "@material-ui/core";
import {currencies} from "../../../Constants/Currencies";
import {WithdrawalArr} from "../../../Statuses/WithdrawalStatus";
import {DepositArr} from "../../../Statuses/DepositStatus";
import {isLocked} from "../../../Constants/isLocked";
import {IPayments} from "../../../Interfaces/Payments";
import {ReactElement} from "react";
import { WithdrawalFilter } from "../../../Interfaces/FilterInterface";
import { SituationalValue } from "../../../Interfaces/Types";

const Payments = ({handleFilterChange, filterState, transaction}:IPayments): ReactElement => {
    const checkTransactionType = <T extends SituationalValue>(depositValue: T, withdrawalValue: T): T => {
        if (filterState.hasOwnProperty('isLocked')) return withdrawalValue
        return depositValue
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
                checkTransactionType(<></> , <DefaultSelect
                    placeholder="Lock"
                    base={isLocked}
                    name="isLocked"
                    selectState={(filterState as WithdrawalFilter).isLocked}
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
                name="currency"
                selectState={filterState.currency}
                handleFilterChange={handleFilterChange}
            />
        </>
    )
}

export default Payments