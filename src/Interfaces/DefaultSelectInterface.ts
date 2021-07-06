import {IDeposit} from "./IDeposit";

export interface IComponentSelect extends Omit<IDeposit, 'filterState'> {
    placeholder: string,
    base: string[],
    selectState: string[],
    name?: string
}