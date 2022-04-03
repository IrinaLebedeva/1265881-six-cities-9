import {createSlice} from '@reduxjs/toolkit';
import {NewReviewSendStatus} from 'settings/new-review-send-status';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';
import {StoreNamespace} from 'settings/store-namespace';
import {
  Offer,
  Offers
} from 'types/offer';
import {Reviews} from 'types/review';

interface InitialState {
  offer: Offer | null,
  reviews: Reviews,
  nearbyOffers: Offers,
  newReviewSendStatus: NewReviewSendStatus,
}

const initialState: InitialState = {
  offer: null,
  reviews: [],
  nearbyOffers: [],
  newReviewSendStatus: NewReviewSendStatus.NotSend,
};

export const offerReducer = createSlice({
  name: StoreNamespace.Offer,
  initialState,
  reducers: {
    setOffer: (state, action:PayloadAction<Offer>) => {
      state.offer = action.payload;
    },
    setOfferReviews: (state, action:PayloadAction<Reviews>) => {
      state.reviews = action.payload;
    },
    setOfferNearbyOffers: (state, action:PayloadAction<Offers>) => {
      state.nearbyOffers = action.payload;
    },
    setNewReviewSendStatus: (state, action:PayloadAction<NewReviewSendStatus>) => {
      state.newReviewSendStatus = action.payload;
    },
  },
});

export const {
  setOffer,
  setOfferReviews,
  setOfferNearbyOffers,
  setNewReviewSendStatus,
} = offerReducer.actions;