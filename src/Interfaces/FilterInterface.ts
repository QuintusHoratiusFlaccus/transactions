interface basicInterface {
    status: Array<string>,
    id: string,
    username: string,
    currencies: Array<string>
}

export interface Deposit extends basicInterface{}

export interface Withdrawal extends basicInterface{
    isLocked: Array<string>,
}

export type FilterInterface = Deposit | Withdrawal
