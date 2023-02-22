import { useDispatch } from 'react-redux';
import {
  BiLogoutCircleIcon,
  Container,
  ContentContainer,
  IconContainer,
  TopContainer,
} from './styles';
import { useCallback, useEffect, useState } from 'react';
import * as Button from '~/components/Button';
import { AppDispatch } from '~/store';
import { getCategories, getOrder, getOrders } from '~/store/order/actions';
import { Table } from '~/components/Table';
import { useTheme } from 'styled-components';
import { logout } from '~/store/auth';
import { CreateOrderModal } from '~/components/Modal/CreateOrderModal';
import { OrderDetailsModal } from '~/components/Modal/OrderDetailsModal';

export function Dashboard() {
  const theme = useTheme();

  const [selectedOrderModalOpen, setSelectedOrderModalOpen] = useState(false);
  const [createOrderModalOpen, setCreateOrderModalOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  function handleSignOut() {
    dispatch(logout());
  }

  function handleOpenCreateOrderModal() {
    dispatch(getCategories());
    setCreateOrderModalOpen(true);
  }

  function handleCloseCreateOrderModal() {
    setCreateOrderModalOpen(false);
  }

  function handleCloseOrderDetailsModal() {
    setSelectedOrderModalOpen(false);
  }

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const handleRowClick = useCallback((rowId: string) => {
    setSelectedOrderModalOpen(true);
    dispatch(getOrder({ id: rowId }));
  }, []);

  return (
    <Container>
      <ContentContainer>
        <TopContainer>
          <IconContainer onClick={handleSignOut}>
            <BiLogoutCircleIcon color={theme.palette.ternary.main} size={40} />
          </IconContainer>
          <Button.Root onClick={handleOpenCreateOrderModal}>
            <Button.Typography type='submit'>Open new order</Button.Typography>
          </Button.Root>
        </TopContainer>
        <Table onRowClick={handleRowClick} />
      </ContentContainer>
      <CreateOrderModal
        isOpen={createOrderModalOpen}
        contentLabel='Create new order'
        onRequestClose={handleCloseCreateOrderModal}
      />
      <OrderDetailsModal
        isOpen={selectedOrderModalOpen}
        contentLabel='Order details'
        onRequestClose={() => setSelectedOrderModalOpen(false)}
      />
    </Container>
  );
}
