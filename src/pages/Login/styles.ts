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
  font-weight: 600;
  color: ${(props) => props.theme.palette.common.black};
  margin-bottom: 2rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ExtraInformationsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  font-size: 0.8rem;
`;

export const ExtraInformationsLabel = styled.p`
  color: ${(props) => props.theme.palette.common.black};
  opacity: 0.6;
`;

export const ExtraInformationsLink = styled.a`
  color: ${(props) => props.theme.palette.primary.main};
  cursor: pointer;
  font-weight: 600;
`;
