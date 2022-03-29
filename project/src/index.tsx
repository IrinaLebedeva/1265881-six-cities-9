import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import {browserHistory} from 'services/browser-history';
import {checkAuthorization} from 'store/user/api-action';
import {ErrorMessage} from 'components/error-message/error-message';
import {favoriteOffers} from 'fixture/favorite-offers';
import {getOffers} from 'store/offers/api-action';
import {HistoryRouteContainer} from 'components/history-route-container/history-route-container';
import 'leaflet/dist/leaflet.css';
import {Provider} from 'react-redux';
import {store} from 'store/store';

store.dispatch(getOffers());
store.dispatch(checkAuthorization());

ReactDOM.render(
  <Provider store={store}>
    <ErrorMessage/>
    <HistoryRouteContainer history={browserHistory}>
      <App favoriteOffers={favoriteOffers}/>
    </HistoryRouteContainer>
  </Provider>,
  document.getElementById('root'));
