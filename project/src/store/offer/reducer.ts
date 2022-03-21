import {createReducer} from '@reduxjs/toolkit';
import {
  Offer,
  Offers
} from 'types/offer';
import {Reviews} from 'types/review';
import {
  setOffer,
  setOfferNearbyOffers,
  setOfferReviews
} from 'store/offer/action';

interface InitialState {
  offer: Offer | null,
  reviews: Reviews,
  nearbyOffers: Offers,
}

const initialState: InitialState = {
  offer: null,
  reviews: [],
  nearbyOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload.offer;
    })
    .addCase(setOfferReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    })
    .addCase(setOfferNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload.nearbyOffers;
    });
});

export {reducer};
