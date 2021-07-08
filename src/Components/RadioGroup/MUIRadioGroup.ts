import {RadioGroup, withStyles} from "@material-ui/core";
import {ReactElement} from "react";

export const MUIRadioGroup = withStyles({
    root: {
        flexDirection: 'row'
    }
})(RadioGroup)