import { RootState } from '../types';
import { UserDataEntity } from '../../types/userData';
import { AppRedirectUrl } from './types';

export const getRedirectUrl = (state: RootState): AppRedirectUrl | null =>
  state.app.redirectUrl;

export const getUserData = (state: RootState): UserDataEntity | null =>
  state.app.userData;
