import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.75rem;
  justify-content: space-around;
  border-radius: 16px;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: none;
  color: ${({ theme }) => theme.palette.common.white};
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette.ternary.main};
    scale: 1.05;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.disabled.main};
  }
`;

export const IconContainer = styled.div``;

export const Text = styled.span`
  font-weight: bold;
`;
