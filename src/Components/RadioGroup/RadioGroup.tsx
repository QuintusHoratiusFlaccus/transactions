import React from 'react';
import { StyledRadio } from './StyledRadio';
import {FormControl, FormControlLabel} from "@material-ui/core";
import { MUIRadioGroup } from './MUIRadioGroup';
import {IComponentRadio} from "../../Interfaces/RadioInterface";

function RadioGroup({transaction, handleRadioChange}:IComponentRadio) {

    const checkBy = (type: string, color: string): string => {
        if (transaction === type) return color
        return 'primary'
    }

    return (
        <FormControl>
            <MUIRadioGroup value={transaction} onChange={handleRadioChange} >
                <FormControlLabel
                    value="deposit"
                    control={
                        <StyledRadio value="deposit" customColor={checkBy('deposit', 'crimson')}/>
                    }
                    label="Deposit"
                />
                <FormControlLabel
                    value="withdrawal"
                    control={
                        <StyledRadio value="withdrawal" customColor={checkBy('withdrawal', 'mediumseagreen')}/>
                    }
                    label="Withdrawal"
                />
            </MUIRadioGroup>
        </FormControl>
    );
}

export default RadioGroup;
