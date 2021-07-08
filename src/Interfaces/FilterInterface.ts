import {DepositStatus} from "../Statuses/DepositStatus";
import {WithdrawalStatus} from "../Statuses/WithdrawalStatus";
import {Currencies} from "../Constants/Currencies";
import {IsLocked} from "../Constants/isLocked";

interface BasicFilterInterface {
    id: string,
    username: string,
    currency: Currencies
}

export interface DepositFilter extends BasicFilterInterface{
    status: DepositStatus[]
}

export interface WithdrawalFilter extends BasicFilterInterface{
    status: WithdrawalStatus[]
    isLocked: IsLocked
}

export type FilterInterface = DepositFilter | WithdrawalFilter
