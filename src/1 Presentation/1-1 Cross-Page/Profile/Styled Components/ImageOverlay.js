import styled, {css} from 'styled-components';

export const ImageOverlay = styled.div`
  ${props=> css`
    position: absolute;
    width: ${window.innerWidth/3}px;
    height: ${window.innerWidth/3}px;
    background-color: ${props.color};

  `}
`