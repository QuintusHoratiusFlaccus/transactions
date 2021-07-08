import React from "react";

export type HandleRadioChange = React.ChangeEvent<HTMLInputElement>

export interface RadioInterface {
    customColor: string,
}

export interface IComponentRadio {
    transaction: string,
    handleRadioChange(e: HandleRadioChange): void
}