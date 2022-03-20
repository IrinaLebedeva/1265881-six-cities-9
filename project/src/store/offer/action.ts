import {createAction} from '@reduxjs/toolkit';
import {
  Offer,
  Offers
} from 'types/offer';
import {Reviews} from 'types/review';

export const setOffer = createAction<{offer: Offer}>('offer/setOffer');

export const setOfferReviews = createAction<{offerId: number, reviews: Reviews}>('offer/setOfferReviews');

export const setNearbyOffers = createAction<{offerId: number, nearbyOffers: Offers}>('offer/setNearbyOffers');
