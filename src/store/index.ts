import { AnyAction, Reducer, configureStore } from '@reduxjs/toolkit';
import { AuthState, reducer as authReducer } from './auth';

export interface ThunkApiConfig {
  dispatch: AppDispatch;
  state: RootState;
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
