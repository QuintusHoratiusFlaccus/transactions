import axios from "axios";
import {UsernameResponse} from "../Interfaces/apiTypes";

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
    getWithdrawal: (data: string): Promise<{}> => axios.get(
        `http://localhost:3001/WITHDRAWALS${data}`
    ),
    getIdByUsername: (username: string): Promise<UsernameResponse> => axios.get(
        `http://localhost:3001/USERS`,
        {
            params: {
                username
            }
        }
    )
}