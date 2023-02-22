import { createSlice } from '@reduxjs/toolkit';
import { Order } from '~/interfaces/Order';
import { createOrder, getCategories, getOrders } from './actions';
import { displayToast } from '~/util/displayToast';

export interface OrderState {
  loading: boolean;
  data: Order[];
  categories: Category[];
  error: any;
  success: boolean | null;
}

const initialState = {
  loading: false,
  data: [],
  categories: [],
  error: null,
  success: null,
} as OrderState;

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Order
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
  },
});

export const { reducer } = orderSlice;
