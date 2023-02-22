import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  background: white;
  color: ${(props) => props.theme.palette.common.black};
  outline: none;
  padding: 1rem;

  @media (max-width: 700px) {
    font-size: 0.8rem;
    border: none;
  }
`;

export const TableHead = styled.thead`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.common.white};
  margin: 1rem;
  border: 2px solid ${(props) => props.theme.palette.common.black};
  border-radius: 16px;

  @media (max-width: 700px) {
    border: 0.5px solid ${(props) => props.theme.palette.common.black};
  }
`;

export const TableRow = styled.tr`
  text-align: center;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.palette.light.main};
  }
`;

export const TableDataCell = styled.td`
  outline: none;
  height: 4rem;
  border: 2px solid ${(props) => props.theme.palette.common.black};
  @media (max-width: 700px) {
    border: 0.5px solid ${(props) => props.theme.palette.common.black};
    height: 3rem;
  }
`;

export const TableHeadCell = styled.th`
  font-weight: 600;
  outline: none;
  height: 3rem;
  border: 2px solid ${(props) => props.theme.palette.common.black};

  @media (max-width: 700px) {
    border: 0.5px solid ${(props) => props.theme.palette.common.black};
    height: 2rem;
  }
`;

export const TableBody = styled.tbody`
  border-radius: 16px;
`;
