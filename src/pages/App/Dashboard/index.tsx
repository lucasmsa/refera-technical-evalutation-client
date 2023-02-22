import { useDispatch, useSelector } from 'react-redux';
import {
  BiLogoutCircleIcon,
  Container,
  ContentContainer,
  IconContainer,
  TopContainer,
} from './styles';
import { useEffect, useMemo, useState } from 'react';
import * as Button from '~/components/Button';
import { AppDispatch, RootState } from '~/store';
import { getCategories, getOrders } from '~/store/order/actions';
import { columnData } from '~/util/columnData';
import { Table } from '~/components/Table';
import { Order } from '~/interfaces/Order';
import { Column } from 'react-table';
import { useTheme } from 'styled-components';
import { logout } from '~/store/auth';
import { CreateOrderModal } from '~/components/Modal/CreateOrderModal';

export function Dashboard() {
  const theme = useTheme();
  const { token } = useSelector((state: RootState) => state.auth);

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
          <Button.Root onClick={handleOpenCreateOrderModal}>
            <Button.Typography type='submit'>Open new order</Button.Typography>
          </Button.Root>
        </TopContainer>
        <Table />
      </ContentContainer>
      <CreateOrderModal
        isOpen={createOrderModalOpen}
        contentLabel='Create new order'
        onRequestClose={handleCloseCreateOrderModal}
      />
    </Container>
  );
}
