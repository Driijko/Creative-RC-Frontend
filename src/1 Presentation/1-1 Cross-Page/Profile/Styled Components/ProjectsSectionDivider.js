import styled, {css} from "styled-components";

import responsive from "../../../../2 helper functions/responsive";

export const ProjectsSectionDivider = styled.div`
  ${props=> css`
    text-align: center;
    font-family: ${props.font};
    color: ${props.color};
    font-size: ${responsive("biggest", 1920, 1, 4)}vmax;
  `}

`