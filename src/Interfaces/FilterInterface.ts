interface defaultInterface {
    status: Array<string>,
    id: string,
    username: string,
    currencies: Array<string>
}

interface IDeposit extends defaultInterface{}

interface IWithdrawal extends defaultInterface{
    isLocked: Array<string>,
}

export type FilterInterface = IDeposit | IWithdrawal
