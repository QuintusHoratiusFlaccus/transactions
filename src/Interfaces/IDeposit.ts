import {DefaultTransactionsInterface} from "./DefaultTransactionsInterface";
import {Deposit} from "./FilterInterface";

export interface IDeposit extends DefaultTransactionsInterface {
    filterState: Deposit
}
