import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import {favoriteOffers} from 'fixture/favorite-offers';
import 'leaflet/dist/leaflet.css';
import {Provider} from 'react-redux';
import {store} from 'store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App favoriteOffers={favoriteOffers}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
