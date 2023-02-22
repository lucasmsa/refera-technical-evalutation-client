import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.palette.common.black};
  @media (max-width: 700px) {
    scale: 0.8;
  }
`;

export const FormContainer = styled.form`
  margin-top: 1.5rem;

  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 700px) {
    scale: 0.8;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 25rem;
  flex-wrap: wrap;
`;

export const MidSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
