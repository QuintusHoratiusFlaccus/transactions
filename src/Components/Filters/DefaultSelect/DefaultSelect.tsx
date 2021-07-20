import {
    FormControl as MuiFormControl,
    Input as MuiInput,
    InputLabel as MuiInputLabel,
    Select as MuiSelect,
    SelectProps
} from "@material-ui/core"
import {getArrayOfOptions} from "./getArrayOfOptions";
import {SelectPropsInterface} from "../../../Interfaces/DefaultSelectInterface";
import {ReactElement} from "react";

const DefaultSelect = ({name, placeholder, base, selectState, handleFilterChange, shouldCapital = false}:SelectPropsInterface): ReactElement => {
    return (
        <MuiFormControl>
            <MuiInputLabel id="select-label">{placeholder}</MuiInputLabel>
            <MuiSelect
                labelId="select-label"
                multiple
                value={selectState}
                onChange={handleFilterChange as SelectProps['onChange']}
                input={<MuiInput />}
                renderValue={(selected) => (selected as string[]).length + ' item(s)'}
                name={name ?? placeholder.toLowerCase()}
            >
                {getArrayOfOptions({base, selectState, shouldCapital})}
            </MuiSelect>
        </MuiFormControl>
    )
}

export default DefaultSelect