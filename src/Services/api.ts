import axios from "axios";
import {DepositFilter} from "../Interfaces/FilterInterface";

interface DepositReq extends Omit<DepositFilter, 'username'>{
    playerId: string,
}

interface WithdrawalReq {

}


export const api: object = {
    getDeposits: (data: DepositReq) => axios.get(
        `http://localhost:3001/DEPOSITS`,
        {
            params: {
                ...data
            }
        }
    )
}