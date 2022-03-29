import {combineReducers} from '@reduxjs/toolkit';
import {cityReducer} from 'store/city/reducer';
import {offerReducer} from 'store/offer/reducer';
import {offersReducer} from 'store/offers/reducer';
import {userReducer} from 'store/user/reducer';

export const reducer = combineReducers({
  cityReducer,
  offerReducer,
  offersReducer,
  userReducer,
});
