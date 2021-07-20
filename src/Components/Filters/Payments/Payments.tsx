import DefaultSelect from "../DefaultSelect/DefaultSelect"
import { TextField } from "@material-ui/core";
import {currencies} from "../../../Constants/Currencies";
import {WithdrawalStatusValues} from "../../../Statuses/WithdrawalStatus";
import {DepositStatusValues} from "../../../Statuses/DepositStatus";
import {isLocked} from "../../../Constants/isLocked";
import {PaymentsPropsInterface} from "../../../Interfaces/Payments";
import {ReactElement} from "react";
import { WithdrawalFilter } from "../../../Interfaces/FilterInterface";

const Payments = ({handleFilterChange, filterState, transaction}:PaymentsPropsInterface): ReactElement => {
    const isDeposit = transaction === 'deposit'

    return (
        <>
            <DefaultSelect
                placeholder="Status"
                base = {isDeposit ? DepositStatusValues : WithdrawalStatusValues}
                selectState={filterState.status}
                handleFilterChange={handleFilterChange}
            />
            {!isDeposit &&
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