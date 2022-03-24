import {AuthorizationStatus} from 'settings/authorization-status';
import {createReducer} from '@reduxjs/toolkit';
import {
  resetUser,
  setAuthorization,
  setErrorMessage,
  setUser
} from 'store/user/action';
import {User} from 'types/user';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  errorMessage: string;
  user: User;
}

const initialUser = {
  avatarUrl: '',
  email: '',
  id: 0,
  isPro: false,
  name: '',
};

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  errorMessage: '',
  user: initialUser,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setErrorMessage, (state, action) => {
      state.errorMessage = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(resetUser, (state) => {
      state.user = initialUser;
    });
});

export {reducer};
