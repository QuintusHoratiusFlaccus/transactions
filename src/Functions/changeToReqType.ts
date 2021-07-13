import {DepositFilter, WithdrawalFilter} from "../Interfaces/FilterInterface";
import {isLocked} from "../Constants/isLocked";

type ToReqProp<T> = Omit<T, 'username'> & {playerId: string}

export type DepositPropsType = ToReqProp<DepositFilter>

export type WithdrawalPropsType = ToReqProp<WithdrawalFilter>

interface ClearedWithdrawalProps extends Pick<WithdrawalPropsType, 'status' | 'currency'>{
    isLocked?: boolean,
    playerId?: string,
    id?: string
}

type WithdrawalMapType = { [v: string]: ClearedWithdrawalProps}

const buildQueryString = (props: DepositPropsType | WithdrawalMapType): string => {
    let q = '?'

    for (let [key, value] of Object.entries(props)) {
        if ((value && value.length > 0) || typeof value === "boolean") {
            if (Array.isArray(value)) {
                value.forEach((el) => {
                    q += `${key}=${underscoreToSpace(el.toUpperCase())}&`
                })
            } else {
                q += `${key}=${value}&`
            }
        }
    }

    return q.slice(0, -1)
}

const underscoreToSpace = (el: string): string => {
    return el.replace(/ /g, '_')
}

const isLockedModify = (props: WithdrawalPropsType): WithdrawalMapType => {
    const localMap = new Map()
    for (const [key, value] of Object.entries(props)) {
        if (key === 'isLocked') {
            if (value.length === 1) {
                if (value[0] === 'Locked') {
                    localMap.set(key, false)
                }
                if (value[0] === 'Unlocked') {
                    localMap.set(key, true)
                }
            }
        } else if (value) {
            localMap.set(key, value)
        }
    }
    return Object.fromEntries(localMap)
}

export const toDepositReqType = (props: DepositPropsType): string => {
    return buildQueryString(props)
}

export const toWithdrawalReqType = (props: WithdrawalPropsType): string => {
    return buildQueryString(isLockedModify(props))
}