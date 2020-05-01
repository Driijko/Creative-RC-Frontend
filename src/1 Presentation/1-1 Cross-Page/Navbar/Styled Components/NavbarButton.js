import styled from 'styled-components';

import responsive from '../../../../2 helper functions/responsive';

export const NavbarButton = styled.div`
  margin: 1vh;
  padding: 1vh;
  color: white;
  border: 2px solid white;
  cursor: pointer;
  font-size: ${responsive("biggest", 1920, 1, 2)}vmax
`