import {AuthorizationStatus} from 'settings/authorization-status';
import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';
import {StoreNamespace} from 'settings/store-namespace';
import {User} from 'types/user';

interface InitialState {
  authorizationStatus: AuthorizationStatus,
  errorMessage: string,
  user: User,
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

const userReducer = createSlice({
  name: StoreNamespace.User,
  initialState,
  reducers: {
    setAuthorization: (state, action:PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
    setErrorMessage: (state, action:PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    setUser: (state, action:PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = initialUser;
    },
  },
});

export {
  initialUser,
  userReducer
};

export const {
  setAuthorization,
  setErrorMessage,
  setUser,
  resetUser,
} = userReducer.actions;

