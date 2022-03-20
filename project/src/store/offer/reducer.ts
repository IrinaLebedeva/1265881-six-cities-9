import {createReducer} from '@reduxjs/toolkit';
import {Offer, Offers} from 'types/offer';
import {Reviews} from 'types/review';
import {
  setNearbyOffers,
  setOffer,
  setOfferReviews
} from 'store/offer/action';

type storeOffer = {
  timestamp: number;
  offer: Offer;
};

type storeReviews = {
  timestamp: number;
  reviews: Reviews;
};

type storeNearbyOffers = {
  timestamp: number;
  nearbyOffers: Offers;
};

interface InitialState {
  offers: storeOffer[];
  reviews: storeReviews[];
  nearbyOffers: storeNearbyOffers[];
}

const initialState: InitialState = {
  offers: [],
  reviews: [],
  nearbyOffers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffer, (state, action) => {
      const newOffer = action.payload.offer;
      state.offers[newOffer.id] = {
        timestamp: Number(Date.now()),
        offer: newOffer,
      };
    })
    .addCase(setOfferReviews, (state, action) => {
      state.reviews[action.payload.offerId] = {
        timestamp: Number(Date.now()),
        reviews: action.payload.reviews,
      };
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers[action.payload.offerId] = {
        timestamp: Number(Date.now()),
        nearbyOffers: action.payload.nearbyOffers,
      };
    });
});

export {reducer};
