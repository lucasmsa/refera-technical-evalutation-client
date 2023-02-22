import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  align-items: center;
  overflow: hidden;
  background: ${(props) => props.theme.palette.light.main};
`;
