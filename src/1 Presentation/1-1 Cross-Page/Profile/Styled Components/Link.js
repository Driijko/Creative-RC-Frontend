import styled, {css} from "styled-components";

import responsive from "../../../../2 helper functions/responsive";


export const Link = styled.div`
  ${props => css`
    font-family: ${props.font};
    font-size: ${responsive("biggest", 1920, 1, 3)}vmax;
    border: 1px dashed ${props.color};
    font-weight: bold;
    text-align: center;
    margin: 5px 0px;
  `}
`