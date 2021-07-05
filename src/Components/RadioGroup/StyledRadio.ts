import styled from 'styled-components'
import {RadioInterface} from "../../Interfaces/RadioInterface";
import {Radio} from "@material-ui/core";

export const StyledRadio = styled(Radio)<RadioInterface>`
  color: ${(props) => props.customColor}!important;
`