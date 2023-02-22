import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { useEffect, useMemo } from 'react';
import { AppDispatch, RootState } from '~/store';
import { getOrders } from '~/store/order/actions';
import { columnData } from '~/util/columnData';
import { Table } from '~/components/Table';
import { Order } from '~/interfaces/Order';
import { Column } from 'react-table';

export function Dashboard() {
  const { token } = useSelector((state: RootState) => state.auth);
  const tableData = useSelector((state: RootState) => state.order.data);

  const dispatch = useDispatch<AppDispatch>();
  const columns = useMemo(() => columnData, []);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <Container>
      <Table data={tableData} columns={columns as Column<Order>[]} />
    </Container>
  );
}
