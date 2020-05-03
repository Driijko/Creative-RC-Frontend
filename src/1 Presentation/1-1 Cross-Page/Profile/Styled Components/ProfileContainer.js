import styled, {css} from 'styled-components';

export const ProfileContainer = styled.div`
  ${props=> css`
    width: ${window.innerWidth < 650 ? "100%" : `${window.innerWidth - 400}px`}; 
    background-color: ${props.color} 
  `}

`