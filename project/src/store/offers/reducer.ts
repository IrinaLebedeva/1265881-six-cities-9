import {createReducer} from '@reduxjs/toolkit';
import {Offers} from 'types/offer';
import {offers as fixtureOffers} from 'fixture/offers';
import {
  setOffers
} from 'store/offers/action';

type InitialState = {
  offers: Offers;
}

const initialState: InitialState = {
  offers: fixtureOffers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state) => {
      //результат запроса к API
    });
});

export {reducer};
