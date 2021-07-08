import {DefaultTransactionsInterface} from "./DefaultTransactionsInterface";
import {WithdrawalFilter} from "./FilterInterface";

export interface IWithdrawal extends DefaultTransactionsInterface {
    filterState: WithdrawalFilter
}