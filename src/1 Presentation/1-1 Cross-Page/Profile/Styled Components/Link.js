import styled, {css} from "styled-components";

import responsive from "../../../../2 helper functions/responsive";


export const Link = styled.div`
  ${props => css`
    font-family: ${props.font};
    font-size: ${responsive("biggest", 1920, 1, 2)}vmax;
    text-align: center;
    margin: 5px 0px;
  `}
`