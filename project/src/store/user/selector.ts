import {AuthorizationStatus} from 'settings/authorization-status';
import {State} from 'types/state';
import {NameSpace} from 'settings/name-space';
import {User} from 'types/user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getIsUserAuthorized = (state: State): boolean => state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;

export const getErrorMessage = (state: State): string => state[NameSpace.User].errorMessage;

export const getUser = (state: State): User => state[NameSpace.User].user;
