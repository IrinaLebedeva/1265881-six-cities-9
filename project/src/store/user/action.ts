import {AppRoute} from 'settings/app-route';
import {createAction} from '@reduxjs/toolkit';

export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
