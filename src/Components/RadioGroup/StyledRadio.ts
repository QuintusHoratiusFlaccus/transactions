import styled from 'styled-components'
import {RadioInterface} from "../../Interfaces/RadioInterface";
import {Radio} from "@material-ui/core";

enum colorPalette {
    crimson = 'crimson',
    mediumseagreen = 'mediumseagreen',
}

export const StyledRadio = styled(Radio)<RadioInterface>`
  color: ${(colorPalette) => colorPalette.customColor}!important;
`