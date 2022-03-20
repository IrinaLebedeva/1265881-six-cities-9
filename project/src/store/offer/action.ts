import {createAction} from '@reduxjs/toolkit';
import {
  Offer,
  Offers
} from 'types/offer';
import {Reviews} from 'types/review';

export const setOffer = createAction<{offer: Offer}>('offer/setOffer');

export const setIsOfferLoaded = createAction<{isOfferLoaded: boolean}>('offer/setIsOfferLoaded');

export const setOfferReviews = createAction<{reviews: Reviews}>('offer/setOfferReviews');

export const setOfferNearbyOffers = createAction<{nearbyOffers: Offers}>('offer/setOfferNearbyOffers');
