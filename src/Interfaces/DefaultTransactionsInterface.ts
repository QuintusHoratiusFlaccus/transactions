import React from "react";
import {FilterInterface} from "./FilterInterface";

export interface DefaultTransactionsInterface {
    handleFilterChange(e: React.ChangeEvent<{ value: unknown, name?: string }>): void,
    filterState: FilterInterface,
}