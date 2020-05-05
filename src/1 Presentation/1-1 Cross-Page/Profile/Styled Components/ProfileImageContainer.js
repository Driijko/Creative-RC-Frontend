import styled, {css} from "styled-components";

export const ProfileImageContainer = styled.div`
  ${props=> css`
    width: ${window.innerWidth/3}px;
    height: ${window.innerWidth/3}px;
    border: 4vmax double ${props.color};
    border-radius: 3vmax;
    display: flex;
    margin: 3vmax;  
  `}

`