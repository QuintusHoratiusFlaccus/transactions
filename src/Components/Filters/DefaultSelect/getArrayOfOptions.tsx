import {
    Checkbox as MiuCheckbox,
    ListItemText as MuiListItemText,
    MenuItem as MuiMenuItem
} from "@material-ui/core"
import {ArrayOfOptionsPropsInterface} from "../../../Interfaces/ArrayOfOptionsPropsInterface";
import {ReactElement} from "react";

export const getArrayOfOptions = ({base, selectState, shouldCapital}:ArrayOfOptionsPropsInterface): ReactElement[] => {
    return base.map((el: string) => {

        let mutableEl: string = el
        if(!shouldCapital) {
            mutableEl = (el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
        }
        mutableEl = mutableEl.replace(/_/g, ' ')

        return (
            <MuiMenuItem
                key={`${mutableEl}_key`}
                value={el}
            >
                <MiuCheckbox checked={selectState.indexOf(el) > -1} />
                <MuiListItemText primary={mutableEl} />
            </MuiMenuItem>
        )
    })
}