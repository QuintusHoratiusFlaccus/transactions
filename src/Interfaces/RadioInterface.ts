import React from "react";
import {transactionType} from "./Types";

export type handleRadioChange = React.ChangeEvent<HTMLInputElement>

export interface RadioInterface {
    customColor: string,
}

export interface IComponentRadio {
    transaction: string,
    handleRadioChange(e: handleRadioChange): void
}