import React from "react";

export type FilterChangeEvent = React.ChangeEvent<{ value?: string, name: string }>
// export type FilterChangeEvent = Omit<HTMLSelectElement, 'name' | 'value'> & {value?: string, name: string}

export interface DefaultTransactionsInterface {
    handleFilterChange(e: FilterChangeEvent): void,
}