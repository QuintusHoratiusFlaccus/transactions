import DefaultSelect from "../DefaultSelect/DefaultSelect"
import {IDeposit} from "../../../Interfaces/IDeposit";
import { TextField } from "@material-ui/core";
import {currencies} from "../../../Constants/Currencies";
import { DepositArr } from "../../../Statuses/DepositStatus";
import {ReactElement} from "react";

const Deposit = ({handleFilterChange, filterState}:IDeposit): ReactElement => {
    return (
        <>
            <DefaultSelect
                placeholder="Status"
                base={DepositArr}
                selectState={filterState.status}
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
                selectState={filterState.currencies}
                handleFilterChange={handleFilterChange}
            />
        </>
    )
}

export default Deposit