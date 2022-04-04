import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {NewReviewSendStatus} from 'settings/new-review-send-status';
import {NameSpace} from 'settings/name-space';
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
  name: NameSpace.Offer,
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
