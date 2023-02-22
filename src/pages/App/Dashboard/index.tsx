import { useDispatch, useSelector } from 'react-redux';
import {
  BiLogoutCircleIcon,
  Container,
  ContentContainer,
  IconContainer,
  TopContainer,
} from './styles';
import { useEffect, useMemo } from 'react';
import * as Button from '~/components/Button';
import { AppDispatch, RootState } from '~/store';
import { getOrders } from '~/store/order/actions';
import { columnData } from '~/util/columnData';
import { Table } from '~/components/Table';
import { Order } from '~/interfaces/Order';
import { Column } from 'react-table';
import { useTheme } from 'styled-components';
import { logout } from '~/store/auth';

export function Dashboard() {
  const theme = useTheme();
  const { token } = useSelector((state: RootState) => state.auth);
  const tableData = useSelector((state: RootState) => state.order.data);

  const dispatch = useDispatch<AppDispatch>();
  const columns = useMemo(() => columnData, []);

  function handleSignOut() {
    dispatch(logout());
  }

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <Container>
      <ContentContainer>
        <TopContainer>
          <IconContainer onClick={handleSignOut}>
            <BiLogoutCircleIcon color={theme.palette.ternary.main} size={40} />
          </IconContainer>
          <Button.Root>
            <Button.Typography type='submit'>Open new order</Button.Typography>
          </Button.Root>
        </TopContainer>
        <Table data={tableData} columns={columns as Column<Order>[]} />
      </ContentContainer>
    </Container>
  );
}
