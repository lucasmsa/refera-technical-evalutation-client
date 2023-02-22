import { createSlice } from '@reduxjs/toolkit';
import { Order } from '~/interfaces/Order';
import { createOrder, getCategories, getOrder, getOrders } from './actions';
import { displayToast } from '~/util/displayToast';
import { OrderDetails } from '~/interfaces/OrderDetails';

export interface OrderState {
  loading: boolean;
  data: Order[];
  categories: Category[];
  selectedOrder: OrderDetails | null;
  error: any;
  success: boolean | null;
}

const initialState = {
  loading: false,
  data: [],
  categories: [],
  selectedOrder: null,
  error: null,
  success: null,
} as OrderState;

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Orders
    builder.addCase(getOrders.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getOrders.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.data = payload;
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || action.payload;

      displayToast({ message: state.error, type: 'error' });
    });

    // Get Categories
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;

      state.categories = payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || action.payload;

      displayToast({ message: state.error, type: 'error' });
    });

    // Create Order
    builder.addCase(createOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createOrder.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;

      state.data = [...state.data, payload];
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || action.payload;

      displayToast({ message: state.error, type: 'error' });
    });

    // Get Order
    builder.addCase(getOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getOrder.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;

      state.selectedOrder = payload;
    });
    builder.addCase(getOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || action.payload;

      displayToast({ message: state.error, type: 'error' });
    });
  },
});

export const { reducer } = orderSlice;
