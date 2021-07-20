import {TransactionsInterface} from "./TransactionsInterface";

export interface SelectPropsInterface extends TransactionsInterface {
    placeholder: string,
    base: string[],
    selectState: string[],
    name?: string,
    shouldCapital?: boolean
}