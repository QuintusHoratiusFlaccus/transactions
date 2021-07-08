import React from "react";
import {TransactionType} from "./Types";

// export type RadioChangeEvent = React.ChangeEvent<Omit<HTMLInputElement, 'value'> & {value: TransactionType}>
export type RadioChangeEvent = React.ChangeEvent<HTMLInputElement>

export interface RadioInterface {
    customColor: string,
}

export interface IComponentRadio {
    transaction: string,
    handleRadioChange(e: RadioChangeEvent): void
}