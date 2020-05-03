import styled, {css} from 'styled-components';

import responsive from "../../../../2 helper functions/responsive";

export const Name = styled.div`
  ${props=> css`
    text-align: center;
    font-family: ${props.font};
    font-size: ${responsive("biggest", 1920, 1, 3)}vmax;
    color: ${props.color};
  `}
`