import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import {browserHistory} from 'services/browser-history';
import {checkAuthorization} from 'store/user/api-action';
import {DataLoadedStatus} from 'settings/data-loaded-status';
import {ErrorMessage} from 'components/error-message/error-message';
import {getOffers} from 'store/offers/api-action';
import {HistoryRouteContainer} from 'components/history-route-container/history-route-container';
import 'leaflet/dist/leaflet.css';
import {Provider} from 'react-redux';
import {setDataLoadedStatus} from 'store/offers/offers-reducer';
import {store} from 'store/store';


store.dispatch(setDataLoadedStatus(DataLoadedStatus.InProcess));
store.dispatch(getOffers());
store.dispatch(checkAuthorization());

ReactDOM.render(
  <Provider store={store}>
    <ErrorMessage/>
    <HistoryRouteContainer history={browserHistory}>
      <App/>
    </HistoryRouteContainer>
  </Provider>,
  document.getElementById('root'));
