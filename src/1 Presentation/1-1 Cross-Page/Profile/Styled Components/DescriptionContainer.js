import styled, {css} from "styled-components";

import responsive from "../../../../2 helper functions/responsive";

export const DescriptionContainer = styled.p`
  ${props=> css`
    padding: 5vw; 
    text-align: center; 
    margin: 0px;
    font-family: ${props.font};
    color: ${props.color};
    font-size: ${responsive("biggest", 1920, 1, 3.75)}vmax;
  `}
`