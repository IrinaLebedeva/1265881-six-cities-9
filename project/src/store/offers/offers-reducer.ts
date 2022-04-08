import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {DataLoadedStatus} from 'settings/data-loaded-status';
import {DEFAULT_OFFERS_SORT_TYPE} from 'settings/offers-sort-type';
import {Offers} from 'types/offer';
import {OffersSortTypeKey} from 'types/offers-sort-type-key';
import {NameSpace} from 'settings/name-space';

export type OffersReducerInitialState = {
  offers: Offers;
  offersSortType: OffersSortTypeKey;
  dataLoadedStatus: DataLoadedStatus;
}

const initialState: OffersReducerInitialState = {
  offers: [],
  offersSortType: DEFAULT_OFFERS_SORT_TYPE,
  dataLoadedStatus: DataLoadedStatus.Unknown,
};

export const offersReducer = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setDataLoadedStatus: (state, action:PayloadAction<DataLoadedStatus>) => {
      state.dataLoadedStatus = action.payload;
    },
    setOffers: (state, action:PayloadAction<Offers>) => {
      state.offers = action.payload;
      state.dataLoadedStatus = DataLoadedStatus.Success;
    },
    setOffersSortType: (state, action:PayloadAction<OffersSortTypeKey>) => {
      state.offersSortType = action.payload;
    },
  },
});

export const {
  setDataLoadedStatus,
  setOffers,
  setOffersSortType,
} = offersReducer.actions;
