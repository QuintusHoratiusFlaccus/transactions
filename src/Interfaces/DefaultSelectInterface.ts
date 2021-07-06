import {DefaultTransactionsInterface} from "./DefaultTransactionsInterface";

export interface IComponentSelect extends Omit<DefaultTransactionsInterface, 'filterState'> {
    placeholder: string,
    base: string[],
    selectState: string[],
    name: string
}