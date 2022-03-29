import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_OFFERS_SORT_TYPE} from 'settings/offers-sort-type';
import {Offers} from 'types/offer';
import {
  setOffers,
  setOffersSortType
} from 'store/offers/action';
import {OffersSortTypeKey} from 'types/offers-sort-type-key';

type InitialState = {
  offers: Offers;
  offersSortType: OffersSortTypeKey;
  isOffersLoaded: boolean;
}

const initialState: InitialState = {
  offers: [],
  offersSortType: DEFAULT_OFFERS_SORT_TYPE,
  isOffersLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoaded = true;
    })
    .addCase(setOffersSortType, (state, action) => {
      state.offersSortType = action.payload;
    });
});

export {reducer as offersReducer};
