import styled from 'styled-components';

import responsive from '../../../../2 helper functions/responsive';

export const Greeting = styled.div`
  font-family: "Calibri";
  text-align: center;
  font-size: ${responsive("biggest", 1920, 3, 4)}vmax;
  margin: 2vmax;
  color: hsl(180, 100%, 20%);
`