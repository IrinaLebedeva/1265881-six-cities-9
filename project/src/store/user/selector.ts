import {AuthorizationStatus} from 'settings/authorization-status';
import {State} from 'types/state';
import {StoreNamespace} from 'settings/store-namespace';
import {User} from 'types/user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[StoreNamespace.User].authorizationStatus;

export const getIsUserAuthorized = (state: State): boolean => state[StoreNamespace.User].authorizationStatus === AuthorizationStatus.Auth;

export const getErrorMessage = (state: State): string => state[StoreNamespace.User].errorMessage;

export const getUser = (state: State): User => state[StoreNamespace.User].user;
