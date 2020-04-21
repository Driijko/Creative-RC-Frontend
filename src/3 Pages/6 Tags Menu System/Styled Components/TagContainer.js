import styled, {css} from 'styled-components';

const colors = [
  "red",
  "magenta",
  "deepskyblue"
]

export const TagContainer = styled.div`
  ${props => css`
    background-color: ${colors[props.type]};
    font-size: ${20 - (2 * props.type)}px;
    margin-left: ${10 * props.type}vw;
    width: ${90 - (10 * props.type)}vw;
    font-family: Righteous;
    padding: 0px 1vmax;
    border: 0.3vmax solid white;
    margin: 1px;
    border-radius: 10px;
  `}
`