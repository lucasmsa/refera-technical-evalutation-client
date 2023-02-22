import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.4rem 0.5rem;
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  border-radius: 0.25rem;
  width: 12.5rem;
  background-color: ${(props) => props.theme.palette.common.white};
  &:focus-within {
    border: 2px solid ${(props) => props.theme.palette.ternary.main};
  }
`;

export const InputField = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.palette.common.black};
  width: 100%;

  &:focus {
    font-weight: 600;
  }
`;

export const LabelField = styled.label`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${(props) => props.theme.palette.common.black};
  margin-bottom: -0.5rem;
`;

export const ControllerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ErrorText = styled.p`
  color: ${(props) => props.theme.palette.alert.main};
  font-size: 0.75rem;
  font-weight: 600;
`;
