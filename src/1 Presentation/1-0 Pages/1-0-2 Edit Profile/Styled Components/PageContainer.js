import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: ${window.innerWidth < 640 ? "column" : "row"};
`