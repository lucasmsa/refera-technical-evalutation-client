/* eslint-disable no-empty-pattern */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '~/services/api';
import { API_ROUTES } from '~/services/apiRoutes';
import { AuthState } from '../auth';
import { generateConfig } from '~/services/generateConfig';
import { Order } from '~/interfaces/Order';

export const getOrders = createAsyncThunk(
  'GET_ORDERS',
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

export const createOrder = createAsyncThunk(
  'CREATE_ORDER',
  async (payload: Order, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: AuthState };
      const { token } = auth;

      const response = await api.post(API_ROUTES.app.createOrder, payload, generateConfig(token));

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

export const getCategories = createAsyncThunk(
  'GET_CATEGORIES',
  async (_: void, { rejectWithValue }) => {
    try {
      const response = await api.get(API_ROUTES.app.categories, generateConfig());
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

export const getOrder = createAsyncThunk(
  'GET_ORDER',
  async ({ id }: { id: string }, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as { auth: AuthState };
      const { token } = auth;

      const response = await api.get(API_ROUTES.app.order(id), generateConfig(token));

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
