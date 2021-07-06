import {FilterInterface} from "./FilterInterface";
import {HandleFilterChange} from "./HandleFilterChange";

export interface DefaultTransactionsInterface {
    handleFilterChange(e: HandleFilterChange): void,
    filterState: FilterInterface,
}