import {DefaultTransactionsInterface} from "./DefaultTransactionsInterface";
import {FilterInterface} from "./FilterInterface";
import {TransactionType} from "./Types";

export interface IPayments extends DefaultTransactionsInterface {
    filterState: FilterInterface,
    transaction: TransactionType
}