import {AuthorizationStatus} from 'settings/authorization-status';
import {
  initialUser,
  userReducer,
  setAuthorization,
  setErrorMessage,
  setUser,
  resetUser
} from './user-reducer';
import {makeFakeUser} from 'utils/mocks/make-fake-user';

const fakeUserInitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  errorMessage: '',
  user: initialUser,
};

describe('userReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(userReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(fakeUserInitialState);
  });

  it(`should update authorizationStatus to "${AuthorizationStatus.Auth}"`, () => {
    expect(userReducer.reducer(fakeUserInitialState, setAuthorization(AuthorizationStatus.Auth)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        errorMessage: '',
        user: initialUser,
      });
  });

  const fakeErrorMessage = 'Something wen\'t wrong!';
  it(`should set errorMessage to "${fakeErrorMessage}"`, () => {
    expect(userReducer.reducer(fakeUserInitialState, setErrorMessage(fakeErrorMessage)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        errorMessage: fakeErrorMessage,
        user: initialUser,
      });
  });

  it('should set user', () => {
    const fakeUser = makeFakeUser();
    expect(userReducer.reducer(fakeUserInitialState, setUser(fakeUser)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        errorMessage: '',
        user: fakeUser,
      });
  });

  it('should reset user', () => {
    expect(userReducer.reducer(fakeUserInitialState, resetUser))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        errorMessage: '',
        user: initialUser,
      });
  });

});
