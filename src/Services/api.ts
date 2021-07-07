import axios from "axios";

//TODO?
interface DepositReq {
    status: string[],
    id: string,
    playerId: string,
    currency: string[]
}

interface WithdrawalReq {

}


export const api = {
    getDeposits: (data: DepositReq) => axios.get(
        `http://localhost:3001/DEPOSITS`,
        {
            params: {
                ...data
            }
        }
    )
}