import React, {ReactElement} from 'react';
import {StyledRadio} from './StyledRadio';
import {FormControl, FormControlLabel} from "@material-ui/core";
import {MUIRadioGroup} from './MUIRadioGroup';
import {IComponentRadio} from "../../Interfaces/RadioInterface";
import {PossibleColors, TransactionType} from "../../Interfaces/Types";

const RadioGroup = ({transaction, handleRadioChange}: IComponentRadio): ReactElement => {

    const bindColorToTransaction = (type: TransactionType, color: PossibleColors): PossibleColors | 'primary' => {
        if (transaction === type) return color

        return 'primary'
    }

    return (
        <FormControl>
            <MUIRadioGroup value={transaction} onChange={handleRadioChange}>
                <FormControlLabel
                    value="deposit"
                    control={
                        <StyledRadio
                            value="deposit"
                            customColor={bindColorToTransaction('deposit', 'crimson')}
                        />
                    }
                    label="Deposit"
                />
                <FormControlLabel
                    value="withdrawal"
                    control={
                        <StyledRadio
                            value="withdrawal"
                            customColor={bindColorToTransaction('withdrawal', 'mediumseagreen')}
                        />
                    }
                    label="Withdrawal"
                />
            </MUIRadioGroup>
        </FormControl>
    );
}

export default RadioGroup;
