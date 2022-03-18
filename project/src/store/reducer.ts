import {combineReducers} from '@reduxjs/toolkit';
import {reducer as cityReducer} from 'store/city/reducer';
import {reducer as offersReducer} from 'store/offers/reducer';

export const reducer = combineReducers({
  cityReducer,
  offersReducer,
});
