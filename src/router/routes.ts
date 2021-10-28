import { RouteNotFoundPage } from '../pages/RouteNotFoundPage';
import { Profile } from '../pages/Profile';
import { UserData } from '../pages/UserData';
import { RouteItem } from './types';

export const routes: RouteItem[] = [
  {
    name: 'profile',
    path: '/profile',
    exact: true,
    component: Profile,
  },

  {
    name: 'userData',
    path: '/user-data',
    exact: true,
    component: UserData,
  },

  {
    name: 'routeNotFound',
    path: '*',
    exact: false,
    component: RouteNotFoundPage,
  },
];
