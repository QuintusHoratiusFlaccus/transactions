import { Checkbox, ListItemText, MenuItem } from "@material-ui/core"
import {getArrayOfOptionsInterface} from "../../../Interfaces/getArrayOfOptionsInterface";
import {ReactElement} from "react";

export const getArrayOfOptions = ({base, selectState, capital}:getArrayOfOptionsInterface): ReactElement[] => {
    return base.map((el: string) => {

        let mutableEl: string | string[] = el
        if(!capital) {
            const separator: number = el.indexOf('_')
            mutableEl = [...(el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())]
            if (separator !== -1) {
                mutableEl[separator] = ' '
            }
            mutableEl = mutableEl.join('')
        }


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