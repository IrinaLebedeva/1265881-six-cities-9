import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CITY_NAME: 'Amsterdam',
  CITY_PLACES_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App cityName={Setting.CITY_NAME} cityPlacesCount={Setting.CITY_PLACES_COUNT}/>
  </React.StrictMode>,
  document.getElementById('root'));
