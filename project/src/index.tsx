import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import {City} from 'settings/city';
import {offers} from 'mocks/offers';

const Setting = {
  CITY_NAME: City.Amsterdam,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      cityName = {Setting.CITY_NAME}
      offers = {offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
