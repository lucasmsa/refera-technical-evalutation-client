/* eslint-disable no-empty-pattern */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '~/services/api';
import { API_ROUTES } from '~/services/apiRoutes';
import { AuthState } from '../auth';
import { generateConfig } from '~/services/generateConfig';

export const getOrders = createAsyncThunk(
  API_ROUTES.app.orders,
  async (_: void, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: AuthState };
      const { token } = auth;

      const response = await api.get(API_ROUTES.app.orders, generateConfig(token));

      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message || 'Something went wrong');
      }
    }
  },
);
