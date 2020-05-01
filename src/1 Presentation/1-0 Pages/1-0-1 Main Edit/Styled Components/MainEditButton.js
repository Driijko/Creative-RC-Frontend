import styled, {css} from 'styled-components';

import responsive from '../../../../2 helper functions/responsive';

export const MainEditButton = styled.div`
  ${props => css`
    border: 3px solid ${props.color0};
    margin: 2vmax;
    padding: 1vmax;
    color: ${props.color0};
    background-color: ${props.color1} ;
    cursor: pointer;
    font-size: ${responsive("biggest", 1920, 2, 4)}vmax;
  `}
`