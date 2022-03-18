import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_OFFERS_SORT_TYPE} from 'settings/offers-sort-type';
import {Offers} from 'types/offer';
import {offers as fixtureOffers} from 'fixture/offers';
import {
  setOffers,
  setOffersSortType
} from 'store/offers/action';
import {OffersSortTypeKey} from 'types/offers-sort-type-key';

type InitialState = {
  offers: Offers;
  offersSortType: OffersSortTypeKey;
}

const initialState: InitialState = {
  offers: fixtureOffers,
  offersSortType: DEFAULT_OFFERS_SORT_TYPE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state) => {
      //результат запроса к API
    })
    .addCase(setOffersSortType, (state, action) => {
      state.offersSortType = action.payload.offersSortType;
    });
});

export {reducer};
