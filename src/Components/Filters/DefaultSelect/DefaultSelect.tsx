import { FormControl, Input, InputLabel, Select, SelectProps } from "@material-ui/core"
import {getArrayOfOptions} from "./getArrayOfOptions";
import {IComponentSelect} from "../../../Interfaces/DefaultSelectInterface";
import {ReactElement} from "react";

const DefaultSelect = ({name, placeholder, base, selectState, handleFilterChange}:IComponentSelect): ReactElement => {
    return (
        <FormControl>
            <InputLabel id="select-label">{placeholder}</InputLabel>
            <Select
                labelId="select-label"
                multiple
                value={selectState}
                onChange={handleFilterChange as SelectProps['onChange']}
                input={<Input />}
                renderValue={(selected) => (selected as string[]).join(', ')}
                name={name ?? placeholder.toLowerCase()}
            >
                {getArrayOfOptions({base, selectState})}
            </Select>
        </FormControl>
    )
}

export default DefaultSelect