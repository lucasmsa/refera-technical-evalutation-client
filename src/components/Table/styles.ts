import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 80%;
  margin-top: 4rem;
  background: ${(props) => props.theme.palette.common.white};
  color: ${(props) => props.theme.palette.common.black};
  outline: none;
  padding: 1rem;
`;

export const TableHead = styled.thead`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.common.white};
  margin: 1rem;
  border: 2px solid ${(props) => props.theme.palette.common.black};
  border-radius: 16px;
`;

export const TableRow = styled.tr`
  text-align: center;
  outline: none;
  border-radius: 8px;
`;

export const TableDataCell = styled.td`
  outline: none;
  height: 4rem;
  border: 2px solid ${(props) => props.theme.palette.common.black};
`;

export const TableHeadCell = styled.th`
  font-weight: 600;
  outline: none;
  height: 3rem;
  border: 2px solid ${(props) => props.theme.palette.common.black};
`;

export const TableBody = styled.tbody`
  border-radius: 16px;
`;
