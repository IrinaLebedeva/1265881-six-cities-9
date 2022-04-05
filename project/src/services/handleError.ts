import {ErrorType} from 'types/api-error-type';
import {HttpCode} from 'settings/http-code';
import {resetErrorMessage} from 'store/user/api-action';
import request from 'axios';
import {setErrorMessage} from 'store/user/user-reducer';
import {store} from 'store/store';

export const handleError = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleAppError = (message: string) => {
    store.dispatch(setErrorMessage(message));
    store.dispatch(resetErrorMessage());
  };

  const {response} = error;

  if (response && response.status) {
    switch (response.status) {
      case HttpCode.BadRequest:
        handleAppError(response.data.error);
        break;
      case HttpCode.Unauthorized:
        handleAppError(response.data.error);
        break;
      case HttpCode.NotFound:
        handleAppError(response.data.error);
        break;
    }
  }
};

