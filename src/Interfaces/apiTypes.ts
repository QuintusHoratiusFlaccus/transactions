import {AxiosResponse} from "axios";

export type UsernameResponse = AxiosResponse<Array<{id: string, username: string}>>

export interface GetDepositParams {
    status: string,
    id?: string,
    playerId?: string,
    currency: string
}