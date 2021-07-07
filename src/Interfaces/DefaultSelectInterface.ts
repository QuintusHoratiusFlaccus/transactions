import {DefaultTransactionsInterface} from "./DefaultTransactionsInterface";

export interface IComponentSelect extends DefaultTransactionsInterface {
    placeholder: string,
    base: string[],
    selectState: string[],
    name?: string
}