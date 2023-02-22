import { createSlice } from '@reduxjs/toolkit';
import { authenticateUser, signUpUser } from './actions';
import { displayToast } from '~/util/displayToast';
import { getUserToken } from '~/util/getUserToken';

export interface AuthState {
  loading: boolean;
  token: string | null;
  error: any;
  success: boolean | null;
}

const token = getUserToken();

const initialState = {
  loading: false,
  token,
  error: null,
  success: null,
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Sign up
    builder.addCase(signUpUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.token = payload.token;

      displayToast({ message: 'User created successfully', type: 'success' });
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || action.payload;

      displayToast({ message: state.error, type: 'error' });
    });

    // Authenticate
    builder.addCase(authenticateUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(authenticateUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
    });
    builder.addCase(authenticateUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;

      displayToast({ message: state.error, type: 'error' });
    });
  },
});

export const { logout } = authSlice.actions;
export const { reducer } = authSlice;
