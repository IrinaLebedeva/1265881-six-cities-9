import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import {favoriteOffers} from 'fixture/favorite-offers';
import {offers} from 'fixture/offers';
import {Provider} from 'react-redux';
import {store} from 'store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        favoriteOffers={favoriteOffers}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
