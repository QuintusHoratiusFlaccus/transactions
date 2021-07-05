import { Checkbox, ListItemText, MenuItem } from "@material-ui/core"
import {getArrayOfOptionsInterface} from "../../../Interfaces/getArrayOfOptionsInterface";

export const getArrayOfOptions = ({base, selectState}:getArrayOfOptionsInterface) => {
    return base.map((el: string) => (
        <MenuItem
            key={`${el}_key`}
            value={el}
        >
            <Checkbox checked={selectState.indexOf(el) > -1} />
            <ListItemText primary={el} />
        </MenuItem>
    ))
}