import React, {ReactElement} from 'react';
import {FormControl as MuiFormControl, FormControlLabel as MuiFormControlLabel} from "@material-ui/core";
import {IComponentRadio} from "../../Interfaces/RadioInterface";
import {PossibleColors, TransactionType} from "../../Interfaces/Types";
import { Styled } from './StyledConnector';

const RadioGroup = ({transaction, handleRadioChange}: IComponentRadio): ReactElement => {

    const bindColorToTransaction = (type: TransactionType, color: PossibleColors): PossibleColors | 'primary' => {
        if (transaction === type) return color

        return 'primary'
    }

    return (
        <MuiFormControl>
            <Styled.RadioGroup value={transaction} onChange={handleRadioChange}>
                <MuiFormControlLabel
                    value="deposit"
                    control={
                        <Styled.Radio
                            value="deposit"
                            customColor={bindColorToTransaction('deposit', 'crimson')}
                        />
                    }
                    label="Deposit"
                />
                <MuiFormControlLabel
                    value="withdrawal"
                    control={
                        <Styled.Radio
                            value="withdrawal"
                            customColor={bindColorToTransaction('withdrawal', 'mediumseagreen')}
                        />
                    }
                    label="Withdrawal"
                />
            </Styled.RadioGroup>
        </MuiFormControl>
    );
}

export default RadioGroup;
