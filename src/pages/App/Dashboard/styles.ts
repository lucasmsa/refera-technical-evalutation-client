import styled from 'styled-components';
import { BiLogOutCircle } from 'react-icons/bi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  align-items: center;
  overflow: hidden;
  background: ${(props) => props.theme.palette.light.main};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 2rem;
  gap: 3rem;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.button`
  all: unset;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    scale: 1.2;
  }
`;

export const BiLogoutCircleIcon = styled(BiLogOutCircle)`
  width: 3rem;
  height: 3rem;
  color: ${(props) => props.theme.palette.ternary.main};

  @media (max-width: 700px) {
    width: 2rem;
    height: 2rem;
  }
`;
