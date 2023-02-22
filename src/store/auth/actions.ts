import { createAsyncThunk } from '@reduxjs/toolkit';
import { Authenticate } from '~/interfaces/Authenticate';
import { Register } from '~/interfaces/register';
import { api } from '~/services/api';
import { API_ROUTES } from '~/services/apiRoutes';

export const signUpUser = createAsyncThunk(
  API_ROUTES.auth.register,
  async ({ name, email, password }: Register, { rejectWithValue, dispatch }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      await api.post(API_ROUTES.auth.register, { name, email, password }, config);
      const action = await dispatch(authenicateUser({ email, password }));

      return action.payload;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message || 'Something went wrong');
      }
    }
  },
);

export const authenicateUser = createAsyncThunk(
  API_ROUTES.auth.login,
  async ({ email, password }: Authenticate, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await api.post(API_ROUTES.auth.login, { email, password }, config);

      localStorage.setItem('token', data.token);

      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message || 'Something went wrong');
      }
    }
  },
);
