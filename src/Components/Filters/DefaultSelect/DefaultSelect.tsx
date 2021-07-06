import { FormControl, Input, InputLabel, Select } from "@material-ui/core"
import {getArrayOfOptions} from "./getArrayOfOptions";
import {IComponentSelect} from "../../../Interfaces/DefaultSelectInterface";

function DefaultSelect({name, placeholder, base, selectState, handleFilterChange}:IComponentSelect) {
    return (
        <FormControl>
            <InputLabel id="select-label">{placeholder}</InputLabel>
            <Select
                labelId="select-label"
                multiple
                value={selectState}
                onChange={handleFilterChange}
                input={<Input />}
                renderValue={(selected) => (selected as string[]).join(', ')}
                name={name}
            >
                {getArrayOfOptions({base, selectState})}
            </Select>
        </FormControl>
    )
}

export default DefaultSelect