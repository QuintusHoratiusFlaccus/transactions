import { Checkbox, ListItemText, MenuItem } from "@material-ui/core"
import {getArrayOfOptionsInterface} from "../../../Interfaces/getArrayOfOptionsInterface";
import {ReactElement} from "react";

export const getArrayOfOptions = ({base, selectState, shouldCapital}:getArrayOfOptionsInterface): ReactElement[] => {
    return base.map((el: string) => {

        let mutableEl: string = el
        if(!shouldCapital) {
            mutableEl = (el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
        }
        mutableEl = mutableEl.replace(/_/g, ' ')

        return (
            <MenuItem
                key={`${mutableEl}_key`}
                value={mutableEl}
            >
                <Checkbox checked={selectState.indexOf(mutableEl) > -1} />
                <ListItemText primary={mutableEl} />
            </MenuItem>
        )
    })
}