import {AuthorizationStatus} from 'settings/authorization-status';
import {createSlice} from '@reduxjs/toolkit';
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
    setAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = initialUser;
    },
  },
});

export {userReducer as userReducer};

export const {
  setAuthorization,
  setErrorMessage,
  setUser,
  resetUser,
} = userReducer.actions;

