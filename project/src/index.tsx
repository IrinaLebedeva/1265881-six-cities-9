import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import {DEFAULT_CITY_CODE} from 'settings/const';
import {favoriteOffers} from 'mocks/favorite-offers';
import {offers} from 'mocks/offers';

ReactDOM.render(
  <React.StrictMode>
    <App
      cityCode = {DEFAULT_CITY_CODE}
      offers = {offers}
      favoriteOffers = {favoriteOffers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
