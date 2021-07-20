import React from "react";
import {PossibleColors, TransactionType} from "./Types";

export type RadioChangeEvent = React.ChangeEvent<HTMLInputElement>

export interface RadioInterface {
    customColor: PossibleColors | 'primary',
}

export interface IComponentRadio {
    transaction: TransactionType,
    handleRadioChange(e: RadioChangeEvent): void
}