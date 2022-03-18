import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import {BrowserRouter} from 'react-router-dom';
import {favoriteOffers} from 'fixture/favorite-offers';
import 'leaflet/dist/leaflet.css';
import {Provider} from 'react-redux';
import {store} from 'store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App favoriteOffers={favoriteOffers}/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
