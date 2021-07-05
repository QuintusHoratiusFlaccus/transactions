import React from "react";

export interface RadioInterface {
    customColor?: string | null,
}

export interface IComponentRadio {
    transaction: string,
    handleRadioChange(e: React.ChangeEvent): void
}