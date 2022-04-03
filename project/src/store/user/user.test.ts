import {AuthorizationStatus} from 'settings/authorization-status';
import {
  initialUser,
  userReducer
} from './user-reducer';

describe('userReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(userReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        errorMessage: '',
        user: initialUser,
      })
  })

});
