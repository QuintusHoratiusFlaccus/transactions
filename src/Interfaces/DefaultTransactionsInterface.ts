import React from "react";

export interface DefaultTransactionsInterface {
    handleFilterChange(e: React.ChangeEvent<{ value: unknown, name?: string }>): void,
}