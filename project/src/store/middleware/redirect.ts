import {browserHistory} from 'services/browser-history';
import {Middleware} from 'redux';
import {reducer} from 'store/reducer';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'user/redirectToRoute') {
          browserHistory.push(action.payload);
        }
        return next(action);
      };
