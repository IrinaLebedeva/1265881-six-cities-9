import {createSlice} from '@reduxjs/toolkit';
import {NewReviewSendStatus} from 'settings/new-review-send-status';
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
    setOffer: (state, action) => {
      state.offer = action.payload;
    },
    setOfferReviews: (state, action) => {
      state.reviews = action.payload;
    },
    setOfferNearbyOffers: (state, action) => {
      state.nearbyOffers = action.payload;
    },
    setNewReviewSendStatus: (state, action) => {
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
