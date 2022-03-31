import {createReducer} from '@reduxjs/toolkit';
import {NewReviewSendStatus} from 'settings/new-review-send-status';
import {
  Offer,
  Offers
} from 'types/offer';
import {Reviews} from 'types/review';
import {
  setNewReviewSendStatus,
  setOffer,
  setOfferNearbyOffers,
  setOfferReviews
} from 'store/offer/action';

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

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOfferReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setOfferNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setNewReviewSendStatus, (state, action) => {
      state.newReviewSendStatus = action.payload;
    });
});

export {reducer as offerReducer};
