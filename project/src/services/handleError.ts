import {ErrorType} from 'types/api-error-type';
import {HttpCode} from 'settings/http-code';
import {resetErrorMessage} from 'store/user/api-action';
import request from 'axios';
import {setErrorMessage} from 'store/user/action';
import {store} from 'store/store';

export const handleError = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleAppError = (message: string) => {
    store.dispatch(setErrorMessage({errorMessage: message}));
    store.dispatch(resetErrorMessage());
  };

  const {response} = error;

  if (response && response.status) {
    switch (response.status) {
      case HttpCode.BAD_REQUEST:
        handleAppError(response.data.error);
        break;
      case HttpCode.UNAUTHORIZED:
        handleAppError(response.data.error);
        break;
      case HttpCode.NOT_FOUND:
        handleAppError(response.data.error);
        break;
    }
  }
};
