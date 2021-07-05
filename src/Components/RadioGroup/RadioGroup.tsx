import React from 'react';
import { StyledRadio } from './StyledRadio';
import {FormControl, FormControlLabel} from "@material-ui/core";
import { MUIRadioGroup } from './MUIRadioGroup';
import {IComponentRadio} from "../../Interfaces/RadioInterface";

function RadioGroup({transaction, handleRadioChange}:IComponentRadio) {

    const checkBy = (type: string, color: string) => {
        return transaction === type ? color : null
    }

    return (
        <FormControl>
            <MUIRadioGroup value={transaction} onChange={handleRadioChange} >
                <FormControlLabel
                    value="deposit"
                    control={
                        <StyledRadio customColor={checkBy('deposit', 'crimson')}/>
                    }
                    label="Deposit"
                />
                <FormControlLabel
                    value="withdrawal"
                    control={
                        <StyledRadio customColor={checkBy('withdrawal', 'mediumseagreen')}/>
                    }
                    label="Withdrawal"
                />
            </MUIRadioGroup>
        </FormControl>
    );
}

export default RadioGroup;
