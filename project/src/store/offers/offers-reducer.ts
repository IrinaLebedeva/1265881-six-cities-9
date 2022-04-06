import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {DEFAULT_OFFERS_SORT_TYPE} from 'settings/offers-sort-type';
import {Offers} from 'types/offer';
import {OffersSortTypeKey} from 'types/offers-sort-type-key';
import {NameSpace} from 'settings/name-space';

export type OffersReducerInitialState = {
  offers: Offers;
  offersSortType: OffersSortTypeKey;
  isOffersLoaded: boolean;
}

const initialState: OffersReducerInitialState = {
  offers: [],
  offersSortType: DEFAULT_OFFERS_SORT_TYPE,
  isOffersLoaded: false,
};

export const offersReducer = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setOffers: (state, action:PayloadAction<Offers>) => {
      state.offers = action.payload;
      state.isOffersLoaded = true;
    },
    setOffersSortType: (state, action:PayloadAction<OffersSortTypeKey>) => {
      state.offersSortType = action.payload;
    },
  },
});

export const {
  setOffers,
  setOffersSortType,
} = offersReducer.actions;
