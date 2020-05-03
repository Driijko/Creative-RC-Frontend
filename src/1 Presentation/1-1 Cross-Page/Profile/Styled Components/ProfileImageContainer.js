import styled, {css} from "styled-components";

export const ProfileImageContainer = styled.div`
  ${props=> css`
    width: ${window.innerWidth/3}px;
    height: ${window.innerWidth/3}px;
    border: 4vmax solid ${props.color};
    display: flex;
    margin: 3vmax;  
  `}

`