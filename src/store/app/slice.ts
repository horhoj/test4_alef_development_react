import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDataEntity } from '../../types/userData';
import { AppState } from './types';

const APP_SLICE_NAME = 'app';

const initialState: AppState = {
  redirectUrl: null,
  userData: null,
};

export const appSlice = createSlice({
  name: APP_SLICE_NAME,
  initialState,
  reducers: {
    // в компоненте RedirectExecutor мы отслеживаем изменение
    // redirectUrl и соответственно делаем redirect
    // это нужно что бы не привязывать компоненты к роутеру
    // и была возможность делать переадресацию из react-middleware
    // без доступа напрямую к HISTORY API
    redirect: (state, action: PayloadAction<string>) => {
      state.redirectUrl = {
        path: action.payload,
      };
    },

    setUserData: (state, action: PayloadAction<UserDataEntity | null>) => {
      state.userData = action.payload;
    },
  },
});
