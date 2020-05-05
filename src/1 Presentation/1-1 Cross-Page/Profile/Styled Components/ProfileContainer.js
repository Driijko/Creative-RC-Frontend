import styled, {css} from 'styled-components';

export const ProfileContainer = styled.div`
  ${props=> css`
    width: ${window.innerWidth < 650 ? "94vw": `${window.innerWidth - 400}px`}; 
    background-color: ${props.backColor};
    border: 2vmax solid ${props.borderColor};
    padding-top: 3vh; 
  `}

`