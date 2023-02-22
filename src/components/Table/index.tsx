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
import { RootState } from '~/store';
import { useSelector } from 'react-redux';
import { columnData } from '~/util/columnData';
import { useMemo } from 'react';

interface TableProps {
  onRowClick: (rowId: string) => void;
}

export function Table({ onRowClick }: TableProps) {
  const data = useSelector((state: RootState) => state.order.data);
  const columns = useMemo(() => columnData, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns: columns as Column<Order>[],
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
            <TableRow onClick={() => onRowClick(row.original.id)} key={row} {...row.getRowProps()}>
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
