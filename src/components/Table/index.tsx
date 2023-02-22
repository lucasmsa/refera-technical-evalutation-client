import { Order } from '~/interfaces/Order';
import { Column, useTable } from 'react-table';
import {
  TableBody,
  TableContainer,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from './styles';

interface TableProps {
  data: Order[];
  columns: Array<Column<Order>>;
}

export function Table({ data, columns }: TableProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <TableContainer {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup: any) => (
          <TableRow key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <TableHeadCell key={column} {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableHeadCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row: any) => {
          prepareRow(row);
          return (
            <TableRow key={row} {...row.getRowProps()}>
              {row.cells.map((cell: any) => {
                return (
                  <TableDataCell key={cell} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableDataCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </TableContainer>
  );
}
