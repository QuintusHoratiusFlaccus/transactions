import {DepositFilter, WithdrawalFilter} from "../Interfaces/FilterInterface";

type ToReqProp<T> = Omit<T, 'username'> & {playerId: string}
type Partial<T> = {
    [P in keyof T]?: T[P]
}

export type DepositPropsType = ToReqProp<DepositFilter>
export type WithdrawalPropsType = ToReqProp<WithdrawalFilter>
type WithdrawalBooleanIsLocked = Omit<WithdrawalPropsType, 'isLocked'> & {isLocked?: boolean}
type ClearedWithdrawalQuery = Partial<WithdrawalBooleanIsLocked>
type ClearedDepositQuery = Partial<DepositPropsType>
type ClearedProps = ClearedWithdrawalQuery | ClearedDepositQuery

const buildQueryString = (props: DepositPropsType | WithdrawalBooleanIsLocked): ClearedProps => {
    let q = new Map()

    for (let [key, value] of Object.entries(props)) {
        if ((value && value.length > 0) || typeof value === "boolean") {
            q.set(key, value)
        }
    }

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

export const toDepositReqType = (props: DepositPropsType): ClearedProps => {
    return buildQueryString(props)
}

export const toWithdrawalReqType = (props: WithdrawalPropsType): ClearedProps=> {
    return buildQueryString(isLockedModify(props))
}