import {DefaultTransactionsInterface} from "./DefaultTransactionsInterface";
import {Withdrawal} from "./FilterInterface";

export interface IWithdrawal extends DefaultTransactionsInterface {
    filterState: Withdrawal
}