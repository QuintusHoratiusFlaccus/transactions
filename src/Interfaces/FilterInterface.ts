import {DepositStatus} from "../Statuses/DepositStatus";
import {WithdrawalStatus} from "../Statuses/WithdrawalStatus";
import {Currencies} from "../Constants/Currencies";
import {IsLocked} from "../Constants/isLocked";

//TODO
// type Status = string[] & (DepositStatus | WithdrawalStatus) | []

//2! unlike to currencies
interface basicInterface {
    status: string[],
    id: string,
    username: string,
    currency: Currencies | string[]
}

export interface Deposit extends basicInterface{}

//1! error is missed when empty array is given like alternative type
export interface Withdrawal extends basicInterface{
    isLocked: IsLocked | string[],
}

export type FilterInterface = Deposit | Withdrawal
