import axios, {AxiosResponse} from "axios";
import {DepositFilter} from "../Interfaces/FilterInterface";
import {GetDepositParams, UsernameResponse} from "../Interfaces/apiTypes";

// interface DepositReq extends Omit<DepositFilter, 'username'>{
//     playerId: string,
// }
//
// interface WithdrawalReq {
//
// }

export const api = {
    getDeposits: (data: string): Promise<{}> => axios.get(
        `http://localhost:3001/DEPOSITS${data}`
    ),
    getIdByUsername: (username: string): UsernameResponse => axios.get(
        `http://localhost:3001/USERS`,
        {
            params: {
                username
            }
        }
    )
}