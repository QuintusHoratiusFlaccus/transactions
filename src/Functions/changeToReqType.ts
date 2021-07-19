import {DepositFilter, WithdrawalFilter} from "../Interfaces/FilterInterface";
import {DepositFilters, GetDepositsQueryVariables, GetWithdrawalsQueryVariables, WithdrawalFilters} from "../generated";

type ToReqProp<T> = Omit<T, 'username'> & {playerId?: string | undefined}
// type Partial<T> = {
//     [P in keyof T]?: T[P]
// }

export type DepositPropsType = ToReqProp<DepositFilter>
export type WithdrawalPropsType = ToReqProp<WithdrawalFilter>
type WithdrawalBooleanIsLocked = Omit<WithdrawalPropsType, 'isLocked'> & {isLocked?: boolean}
// type ClearedWithdrawalQuery = Partial<WithdrawalBooleanIsLocked>
// type ClearedDepositQuery = Partial<DepositPropsType>
type ClearedProps = WithdrawalFilters | DepositFilters

const buildQueryString = (props: DepositPropsType | WithdrawalBooleanIsLocked): ClearedProps => {
    let q = new Map()

    for (let [key, value] of Object.entries(props)) {
        if ((value && value.length > 0) || typeof value === "boolean") {
            q.set(key, value)
        }
    }

    // console.log(Object.fromEntries(q))
    return Object.fromEntries(q)
}

const isLockedModify = (props: WithdrawalPropsType): WithdrawalBooleanIsLocked => {
    const localObject: WithdrawalBooleanIsLocked = JSON.parse(JSON.stringify(props))

    if (props.isLocked.length === 1) {
        if (props.isLocked[0] === 'Locked') {
            localObject.isLocked = true
        }
        if (props.isLocked[0] === 'Unlocked') {
            localObject.isLocked = false
        }
    } else {
        delete localObject.isLocked
    }

    return localObject
}

export const toDepositReqType = (props: DepositPropsType): DepositFilters => {
    return buildQueryString(props) as DepositFilters
}

export const toWithdrawalReqType = (props: WithdrawalPropsType): WithdrawalFilters => {
    return buildQueryString(isLockedModify(props)) as WithdrawalFilters
}