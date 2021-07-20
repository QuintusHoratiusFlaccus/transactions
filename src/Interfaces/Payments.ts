import {TransactionsInterface} from "./TransactionsInterface";
import {FilterInterface} from "./FilterInterface";
import {TransactionType} from "./Types";

export interface PaymentsPropsInterface extends TransactionsInterface {
    filterState: FilterInterface,
    transaction: TransactionType
}