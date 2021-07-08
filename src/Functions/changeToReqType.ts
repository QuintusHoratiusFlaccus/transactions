import {DepositFilter} from "../Interfaces/FilterInterface";

// const toStr = <T = Pick<ToDepositReqProps, 'status' | 'currency'>>(arr: T) => {
//     return arr.join(' ')
// }
// const toStr = (arr: string[]): string => {
//     return arr.join(' ')
// }

type ToDepositReqProps = Omit<DepositFilter, 'username'> & {playerId: string}
export const toDepositReqType = (props: ToDepositReqProps) => {
    // let q = new Map()
    let q = '?'

    for(const [key, value] of Object.entries(props)) {
        if(value && value.length > 0) {
            // const newValue = Array.isArray(value) ? value.join(', ').toUpperCase() : value
            // q.set(key, newValue)
            if (Array.isArray(value)) {
                value.forEach((el) => {
                    q += `${key}=${el.toUpperCase()}&`
                })
            } else {
                q += `${key}=${value}&`
            }
        }
    }

    return q.slice(0, -1)
    // return Object.fromEntries(q)
}