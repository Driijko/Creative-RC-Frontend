import styled, {css} from "styled-components";

import responsive from "../../../../2 helper functions/responsive";


export const Stats = styled.div`
  ${props=> css`
    font-family: ${props.font};
    font-size: ${responsive("biggest", 1920, 1, 3)}vmax;
    text-align: center;
    color: ${props.color};
  `}
`