import {createReducer} from '@reduxjs/toolkit';
import {
  Offer,
  Offers
} from 'types/offer';
import {Reviews} from 'types/review';
import {
  setIsOfferLoaded,
  setOffer,
  setOfferNearbyOffers,
  setOfferReviews
} from 'store/offer/action';

interface InitialState {
  offer: Offer | null,
  isOfferLoaded: boolean,
  reviews: Reviews,
  nearbyOffers: Offers,
}

const initialState: InitialState = {
  offer: null,
  isOfferLoaded: false,
  reviews: [],
  nearbyOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload.offer;
    })
    .addCase(setIsOfferLoaded, (state, action) => {
      state.isOfferLoaded = action.payload.isOfferLoaded;
    })
    .addCase(setOfferReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    })
    .addCase(setOfferNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload.nearbyOffers;
    });
});

export {reducer};
