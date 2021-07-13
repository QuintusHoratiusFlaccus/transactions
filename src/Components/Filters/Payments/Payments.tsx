import DefaultSelect from "../DefaultSelect/DefaultSelect"
import { TextField } from "@material-ui/core";
import {currencies} from "../../../Constants/Currencies";
import {WithdrawalStatusValues} from "../../../Statuses/WithdrawalStatus";
import {DepositStatusValues} from "../../../Statuses/DepositStatus";
import {isLocked} from "../../../Constants/isLocked";
import {IPayments} from "../../../Interfaces/Payments";
import {ReactElement} from "react";
import { WithdrawalFilter } from "../../../Interfaces/FilterInterface";
import { SituationalValue } from "../../../Interfaces/Types";

const Payments = ({handleFilterChange, filterState, transaction}:IPayments): ReactElement => {
    const isDeposit = transaction === 'deposit'

    //basically i added this function because expected more then two places with dependant from transaction type.
    //and in case of "routes" extending it can be useful
    // const checkTransactionType = <T extends SituationalValue>(depositValue: T, withdrawalValue: T): T => {
    //     if (filterState.hasOwnProperty('isLocked')) return withdrawalValue
    //     return depositValue
    // }

    return (
        <>
            <DefaultSelect
                placeholder="Status"
                /*base = {checkTransactionType(DepositArr, WithdrawalArr)}*/
                base = {isDeposit ? DepositStatusValues : WithdrawalStatusValues}
                selectState={filterState.status}
                handleFilterChange={handleFilterChange}
            />
            {!isDeposit &&
                /*checkTransactionType(<></> , <DefaultSelect*/
                <DefaultSelect
                    placeholder="Lock"
                    base={isLocked}
                    name="isLocked"
                    selectState={(filterState as WithdrawalFilter).isLocked}
                    handleFilterChange={handleFilterChange}
                />
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
                shouldCapital={true}
            />
        </>
    )
}

export default Payments