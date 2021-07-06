import DefaultSelect from "../DefaultSelect/DefaultSelect"
import { TextField } from "@material-ui/core";
import {currencies} from "../../../Constants/Currencies";
import {WithdrawalArr} from "../../Statuses/WithdrawalStatus";
import {isLocked} from "../../../Constants/isLocked";
import { IWithdrawal } from "../../../Interfaces/IWithdrawal";

function Withdrawal({handleFilterChange, filterState}:IWithdrawal) {
    return (
        <>
            <DefaultSelect
                placeholder="Status"
                base={WithdrawalArr}
                name="status"
                selectState={filterState.status}
                handleFilterChange={handleFilterChange}
            />
            <DefaultSelect
                placeholder="Lock"
                base={isLocked}
                name="isLocked"
                //@ts-ignore
                selectState={filterState.isLocked}
                handleFilterChange={handleFilterChange}
            />
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
                name="currencies"
                selectState={filterState.currencies}
                handleFilterChange={handleFilterChange}
            />
        </>
    )
}

export default Withdrawal