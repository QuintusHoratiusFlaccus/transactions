import styled from 'styled-components'
import {RadioInterface} from "../../Interfaces/RadioInterface";
import {Radio as MUIRadio} from "@material-ui/core";

export const RadioStyles = styled(MUIRadio)<RadioInterface>`
  color: ${(props) => props.customColor}!important;
`