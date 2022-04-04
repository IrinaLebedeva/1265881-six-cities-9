import {combineReducers} from '@reduxjs/toolkit';
import {cityReducer} from 'store/city/city-reducer';
import {favoriteOffersReducer} from 'store/favorite-offers/favorite-offers-reducer';
import {offerReducer} from 'store/offer/offer-reducer';
import {offersReducer} from 'store/offers/offers-reducer';
import {NameSpace} from 'settings/name-space';
import {userReducer} from 'store/user/user-reducer';

export const reducer = combineReducers({
  [NameSpace.City]: cityReducer.reducer,
  [NameSpace.FavoriteOffers]: favoriteOffersReducer.reducer,
  [NameSpace.Offer]: offerReducer.reducer,
  [NameSpace.Offers]: offersReducer.reducer,
  [NameSpace.User]: userReducer.reducer,
});
