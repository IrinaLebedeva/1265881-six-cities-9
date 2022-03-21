import {configureStore} from '@reduxjs/toolkit';
import {createApi} from 'services/api';
import {reducer} from 'store/reducer';
import {redirect} from 'store/middleware/redirect';

export const api = createApi();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
