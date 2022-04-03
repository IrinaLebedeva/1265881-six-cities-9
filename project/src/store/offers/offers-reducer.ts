import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_OFFERS_SORT_TYPE} from 'settings/offers-sort-type';
import {Offers} from 'types/offer';
import {OffersSortTypeKey} from 'types/offers-sort-type-key';
import {StoreNamespace} from 'settings/store-namespace';

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

export const offersReducer = createSlice({
  name: StoreNamespace.Offers,
  initialState,
  reducers: {
    setOffers: (state, action) => {
      state.offers = action.payload;
      state.isOffersLoaded = true;
    },
    setOffersSortType: (state, action) => {
      state.offersSortType = action.payload;
    },
  },
});

export const {
  setOffers,
  setOffersSortType,
} = offersReducer.actions;
