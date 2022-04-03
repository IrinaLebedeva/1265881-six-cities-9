import {combineReducers} from '@reduxjs/toolkit';
import {cityReducer} from 'store/city/city-reducer';
import {favoriteOffersReducer} from 'store/favorite-offers/favorite-offers-reducer';
import {offerReducer} from 'store/offer/reducer';
import {offersReducer} from 'store/offers/reducer';
import {StoreNamespace} from 'settings/store-namespace';
import {userReducer} from 'store/user/reducer';

export const reducer = combineReducers({
  [StoreNamespace.City]: cityReducer.reducer,
  [StoreNamespace.FavoriteOffers]: favoriteOffersReducer.reducer,
  offerReducer,
  offersReducer,
  userReducer,
});
