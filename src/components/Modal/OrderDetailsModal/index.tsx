import Modal from 'react-modal';
import { ModalProps } from '../interface/ModalProps';
import { customModalStyles } from '../custom.modal.styles';
import {
  DetailsContainer,
  DetailsLabel,
  DetailsRowContainer,
  DetailsValue,
  IconContainer,
  Title,
  TopContainer,
} from '../modal.styles';
import { useSelector } from 'react-redux';
import { RootState } from '~/store';
import { useTheme } from 'styled-components';
import { formatDate } from '~/util/formatDate';
import { IoMdCloseCircleOutline } from 'react-icons/io';

type OrdersDetailProps = ModalProps;

export function OrderDetailsModal({
  isOpen: modalIsOpen,
  contentLabel,
  onRequestClose: closeModal,
}: OrdersDetailProps) {
  const theme = useTheme();
  const { selectedOrder } = useSelector((state: RootState) => state.order);
  console.log(selectedOrder);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customModalStyles}
      contentLabel={contentLabel}
      ariaHideApp={false}
    >
      <TopContainer>
        <Title>Order Details</Title>
        <IconContainer onClick={() => closeModal()}>
          <IoMdCloseCircleOutline size={30} color={theme.palette.ternary.main} />
        </IconContainer>
      </TopContainer>
      <DetailsRowContainer>
        <DetailsContainer>
          <DetailsLabel>Contact Name</DetailsLabel>
          <DetailsValue>{selectedOrder?.contact_name}</DetailsValue>
        </DetailsContainer>
        <DetailsContainer>
          <DetailsLabel>Contact Name</DetailsLabel>
          <DetailsValue>{selectedOrder?.contact_phone}</DetailsValue>
        </DetailsContainer>
        <DetailsContainer>
          <DetailsLabel>Real State Agency</DetailsLabel>
          <DetailsValue>{selectedOrder?.real_state_agency}</DetailsValue>
        </DetailsContainer>
      </DetailsRowContainer>
      <DetailsRowContainer>
        <DetailsContainer>
          <DetailsLabel>Order Description</DetailsLabel>
          <DetailsValue>{selectedOrder?.description}</DetailsValue>
        </DetailsContainer>
        <DetailsContainer>
          <DetailsLabel>Real State Agency</DetailsLabel>
          <DetailsValue>{selectedOrder?.real_state_agency}</DetailsValue>
        </DetailsContainer>
      </DetailsRowContainer>
      <DetailsRowContainer>
        <DetailsContainer>
          <DetailsLabel>Category</DetailsLabel>
          <DetailsValue>{selectedOrder?.category.name}</DetailsValue>
        </DetailsContainer>
        <DetailsContainer>
          <DetailsLabel>Deadline</DetailsLabel>
          <DetailsValue>{formatDate(selectedOrder?.deadline as string)}</DetailsValue>
        </DetailsContainer>
      </DetailsRowContainer>
    </Modal>
  );
}
