import React from "react";

export type FilterChangeEvent = React.ChangeEvent<{ value?: string, name: string }>

export interface TransactionsInterface {
    handleFilterChange(e: FilterChangeEvent): void,
}