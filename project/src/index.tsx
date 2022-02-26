import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import {DEFAULT_CITY_CODE} from 'settings/const';
import {offers} from 'mocks/offers';

ReactDOM.render(
  <React.StrictMode>
    <App
      cityCode= {DEFAULT_CITY_CODE}
      offers = {offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
