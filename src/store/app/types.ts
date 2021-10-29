import { UserDataEntity } from '../../types/userData';

export interface AppState {
  redirectUrl: AppRedirectUrl | null;
  userData: UserDataEntity | null;
}

export interface AppRedirectUrl {
  path: string;
}
