import { configureStore } from '@reduxjs/toolkit';
import { reducer as authReducer } from './auth';
import { reducer as orderReducer } from './order';

export interface ThunkApiConfig {
  dispatch: AppDispatch;
  state: RootState;
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
    order: orderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
