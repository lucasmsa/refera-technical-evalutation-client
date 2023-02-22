import { createSlice } from '@reduxjs/toolkit';
import { Order } from '~/interfaces/Order';
import { getOrders } from './actions';
import { displayToast } from '~/util/displayToast';

export interface OrderState {
  loading: boolean;
  data: Order[];
  error: any;
  success: boolean | null;
}

const initialState = {
  loading: false,
  data: [],
  error: null,
  success: null,
} as OrderState;

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
});

export const { reducer } = orderSlice;
