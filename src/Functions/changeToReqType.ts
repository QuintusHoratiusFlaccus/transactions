import {DepositFilter} from "../Interfaces/FilterInterface";

export const toDepositReqType = ({status, id, username, currency}: DepositFilter) => {
    return {
        status,
        id,
        playerId: username,
        currency
    }
}