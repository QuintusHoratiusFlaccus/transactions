import {DepositFilter, WithdrawalFilter} from "../Interfaces/FilterInterface";
import {isLocked} from "../Constants/isLocked";
import {WithdrawalStatus} from "../Statuses/WithdrawalStatus";
import {Currencies} from "../Constants/Currencies";

type ToReqProp<T> = Omit<T, 'username'> & {playerId: string}

type ToDepositReqProps = ToReqProp<DepositFilter>

type ToWithdrawalReqProps = ToReqProp<WithdrawalFilter>

interface ClearedWithdrawalProps extends Pick<ToWithdrawalReqProps, 'status' | 'currency'>{
    isLocked?: boolean,
    playerId?: string,
    id?: string
}

type mapType = { [v: string]: ClearedWithdrawalProps }

// interface RequestType {
//     _buildQueryString: (props: ToDepositReqProps | ToWithdrawalReqProps, transformToSlash: boolean) => void,
//     toDepositReqType: (props: ToDepositReqProps) => string,
//     toWithdrawalReqType: (props: ToWithdrawalReqProps) => string,
//     _spaceToSlash: (el: string) => string,
//     _isLockedModify: (props: ToWithdrawalReqProps) => ToWithdrawalReqProps
// }

// export const request: RequestType = {
//     _buildQueryString: (props: ToDepositReqProps | ToWithdrawalReqProps, transformToSlash: boolean) => {
//         let q = '?'
//
//         for (const [key, value] of Object.entries(props)) {
//             if (transformToSlash) {
//                 this._spaceToSlash(value)
//             }
//
//             if (value && value.length > 0) {
//                 if (Array.isArray(value)) {
//                     value.forEach((el) => {
//                         q += `${key}=${el.toUpperCase()}&`
//                     })
//                 } else {
//                     q += `${key}=${value}&`
//                 }
//             }
//         }
//
//         return q.slice(0, -1)
//     },
//     _spaceToSlash: (el): string => {
//         let mutableEl: string | string[] = el
//         const separator: number = el.indexOf(' ')
//         mutableEl = [...(el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())]
//         if (separator !== -1) {
//             mutableEl[separator] = '_'
//         }
//         return mutableEl.join('')
//     },
//     _isLockedModify: (props: ToWithdrawalReqProps): ToWithdrawalReqProps => {
//         for (const [key, value] of Object.entries(props)) {
//             if (key === 'isLocked') {
//                 if (typeof value !== 'boolean' && value.length > 1) {
//                     delete props.isLocked
//                     return props
//                 }
//                 if (value === 'Locked') {
//                     props.isLocked = false
//                     return props
//                 }
//                 if (value === 'Unlocked') {
//                     props.isLocked = true
//                     return props
//                 }
//             }
//         }
//         return props
//     },
//     toDepositReqType: (props: ToDepositReqProps): string => {
//         return this._buildQueryString(props, false)
//     },
//     toWithdrawalReqType: (props: ToWithdrawalReqProps): string => {
//         this._isLockedModify(props)
//         return this._buildQueryString(props, true)
//     }
// }

const buildQueryString = (props: ToDepositReqProps | mapType): string => {
    let q = '?'

    for (let [key, value] of Object.entries(props)) {
        console.log('key', key, 'value', value)

        if ((value && value.length > 0) || typeof value === "boolean") {
            if (Array.isArray(value)) {
                value.forEach((el) => {
                    q += `${key}=${spaceToSlash(el.toUpperCase())}&`
                })
            } else {
                q += `${key}=${value}&`
                console.log('key', key, 'value', value)

            }
        }
    }

    return q.slice(0, -1)
}

const spaceToSlash = (el: string): string => {
    let mutableEl: string[] = [...el.toUpperCase()]
    const separator: number = el.indexOf(' ')
    if (separator !== -1) {
        mutableEl[separator] = '_'
    }
    return mutableEl.join('')
}

const isLockedModify = (props: ToWithdrawalReqProps): mapType => {
    //TODO
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

export const toDepositReqType = (props: ToDepositReqProps): string => {
    return buildQueryString(props)
}

export const toWithdrawalReqType = (props: ToWithdrawalReqProps): string => {
    return buildQueryString(isLockedModify(props))
}