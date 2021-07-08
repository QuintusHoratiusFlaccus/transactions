import {DefaultTransactionsInterface} from "./DefaultTransactionsInterface";
import {DepositFilter} from "./FilterInterface";

export interface IDeposit extends DefaultTransactionsInterface {
    filterState: DepositFilter
}
