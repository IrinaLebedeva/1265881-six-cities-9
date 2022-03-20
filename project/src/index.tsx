import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import {BrowserRouter} from 'react-router-dom';
import {checkAuthorization} from 'store/user/api-action';
import {favoriteOffers} from 'fixture/favorite-offers';
import {ErrorMessage} from 'components/error-message/error-message';
import {getOffers} from 'store/offers/api-action';
import 'leaflet/dist/leaflet.css';
import {Provider} from 'react-redux';
import {store} from 'store/store';

store.dispatch(getOffers());
store.dispatch(checkAuthorization());

ReactDOM.render(
  <Provider store={store}>
    <ErrorMessage/>
    <BrowserRouter>
      <App favoriteOffers={favoriteOffers}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
