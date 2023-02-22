import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  gap: 1rem;
  margin-top: 4rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => props.theme.palette.common.black};
  margin-bottom: 2rem;
`;

export const Label = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.palette.common.black};
  opacity: 0.8;
`;

export const Description = styled.i`
  font-size: 1rem;
  color: ${(props) => props.theme.palette.primary.main};
`;
