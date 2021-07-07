import { Checkbox, ListItemText, MenuItem } from "@material-ui/core"
import {getArrayOfOptionsInterface} from "../../../Interfaces/getArrayOfOptionsInterface";
import {ReactElement} from "react";

export const getArrayOfOptions = ({base, selectState}:getArrayOfOptionsInterface): ReactElement[] => {
    return base.map((el: string) => (
        <MenuItem
            key={`${el}_key`}
            value={el.charAt(0).toUpperCase() + el.slice(1)}
        >
            <Checkbox checked={selectState.indexOf(el) > -1} />
            <ListItemText primary={el} />
        </MenuItem>
    ))
}