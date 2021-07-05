import { Checkbox, ListItemText, MenuItem } from "@material-ui/core"

export const getArrayOfOptions = (base: string[]) => {
    return base.map((el: string) => (
        <MenuItem key={`${el}_key`} value={el}>
            <Checkbox checked={filter.indexOf(el) > -1} />
            <ListItemText primary={el} />
        </MenuItem>
    ))
}