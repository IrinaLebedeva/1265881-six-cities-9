import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_OFFERS_SORT_TYPE} from 'settings/offers-sort-type';
import {Offers} from 'types/offer';
import {OffersSortTypeKey} from 'types/offers-sort-type-key';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';
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
