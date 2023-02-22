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

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.palette.common.black};
  gap: 0.25rem;
  width: 100%;
`;

export const DetailsLabel = styled.p`
  font-size: 0.8rem;
`;

export const DetailsValue = styled.h3`
  font-size: 1rem;
  font-weight: 600;
`;

export const DetailsRowContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 4rem;
  margin-top: 2rem;
  align-items: space-between;
  justify-content: space-between;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconContainer = styled.button`
  all: unset;
  display: flex;
  transition: 0.2s ease-in-out all;

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
`;
