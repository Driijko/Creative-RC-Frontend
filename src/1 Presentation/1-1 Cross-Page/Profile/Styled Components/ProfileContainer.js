import styled from 'styled-components';

export const ProfileContainer = styled.div`
  border: 2px solid purple;
  margin: 2vmax;
  padding: 1vmax;
  width: ${window.innerWidth < 650 ? "90%" : `${window.innerWidth - 400}px`};
`