import Modal from 'react-modal';
import * as Input from '~/components/Input';
import * as Button from '~/components/Button';
import { ModalProps } from '../interface/ModalProps';
import { customModalStyles } from '../custom.modal.styles';
import {
  DescriptionContainer,
  FormContainer,
  LeftSection,
  MidSection,
  Title,
} from '../modal.styles';
import { Controller, useForm } from 'react-hook-form';
import { inputOptions } from '~/util/inputOptions';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '~/store';
import { useTheme } from 'styled-components';
import { Order } from '~/interfaces/Order';
import { createOrder } from '~/store/order/actions';

type CreateModalProps = ModalProps;

export function CreateOrderModal({
  isOpen: modalIsOpen,
  contentLabel,
  onRequestClose: closeModal,
}: CreateModalProps) {
  const theme = useTheme();
  const { loading } = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) =>
    state.order.categories.map((category) => {
      return {
        label: category.name,
        value: category.id,
      };
    }),
  );

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const descriptionExtraOptions = {
    rows: 4,
    cols: 47,
  };

  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.palette.common.white,
      width: '21.5rem',
      border: `1px solid ${theme.palette.primary.main}`,
    }),
    option: (styles: any) => ({
      ...styles,
      color: theme.palette.common.black,
      background: theme.palette.common.white,
      border: `0.5px solid ${theme.palette.primary.main}`,
    }),
  };

  function handleOrderSubmission(data: any) {
    const category = categories.find((category: any) => category['value'] === data['category']);

    Object.assign(data, { category: { name: category!['label'] } });

    dispatch(createOrder(data as Order));

    closeModal();
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customModalStyles}
      contentLabel={contentLabel}
    >
      <Title>Create new order</Title>
      <FormContainer onSubmit={handleSubmit(handleOrderSubmission)}>
        <LeftSection>
          <Input.FormFieldController
            control={control}
            name='contact_name'
            label='Contact Name'
            rules={inputOptions.contact_name}
            errorMessage={errors.contact_name?.message}
          />
          <Input.FormFieldController
            type='tel'
            control={control}
            name='contact_phone'
            label='Contact Phone'
            rules={inputOptions.contact_phone}
            errorMessage={errors.contact_phone?.message}
          />
          <Controller
            render={({ field: { onChange, value } }) => (
              <DescriptionContainer>
                <Input.Label>Order Description</Input.Label>
                <Input.Root>
                  <Input.TextArea
                    onChange={onChange}
                    value={value || ''}
                    {...descriptionExtraOptions}
                  />
                </Input.Root>
              </DescriptionContainer>
            )}
            control={control}
            name={'description'}
            rules={inputOptions.description}
          />
          {errors.description?.message && (
            <Input.ErrorMessage>{errors.description?.message as any}</Input.ErrorMessage>
          )}
          <Controller
            control={control}
            name='category'
            defaultValue={categories[0]}
            render={({ field }) => (
              <Select
                ref={field.ref}
                menuPlacement='top'
                options={categories}
                value={categories.find((c) => c.value === field.value)}
                onChange={(val) => field.onChange(val?.value)}
                styles={selectStyles}
              />
            )}
          />
          {errors.category?.message && (
            <Input.ErrorMessage>{errors.category?.message as any}</Input.ErrorMessage>
          )}
        </LeftSection>
        <MidSection>
          <Input.FormFieldController
            control={control}
            name='real_state_agency'
            label='Real State Agency'
            rules={inputOptions.real_state_agency}
            errorMessage={errors.real_state_agency?.message}
          />
          <Input.FormFieldController
            control={control}
            name='company'
            label='Company'
            rules={inputOptions.company}
            errorMessage={errors.company?.message}
          />
          <Input.FormFieldController
            control={control}
            name='deadline'
            label='Deadline'
            rules={inputOptions.deadline}
            errorMessage={errors.deadline?.message}
          />
          <Button.Root disabled={loading}>
            <Button.Typography type='submit'>Save</Button.Typography>
          </Button.Root>
        </MidSection>
      </FormContainer>
    </Modal>
  );
}
