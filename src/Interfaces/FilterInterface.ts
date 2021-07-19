import {DepositFilters, DepositStatus, WithdrawalFilters} from "../generated";
import {WithdrawalStatus} from "../generated";
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

// export type DepositFilter = Omit<DepositFilters, 'playerId'> & {username: string}
// export type WithdrawalFilter = Omit<WithdrawalFilters, 'playerId'> & {username: string}

export type FilterInterface = DepositFilter | WithdrawalFilter
