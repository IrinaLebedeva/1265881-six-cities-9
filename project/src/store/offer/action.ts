import {createAction} from '@reduxjs/toolkit';
import {NewReviewSendStatus} from 'settings/new-review-send-status';
import {
  Offer,
  Offers
} from 'types/offer';
import {Reviews} from 'types/review';

export const setOffer = createAction<Offer>('offer/setOffer');

export const setOfferReviews = createAction<Reviews>('offer/setOfferReviews');

export const setOfferNearbyOffers = createAction<Offers>('offer/setOfferNearbyOffers');

export const resetToInitialState = createAction('offer/resetToInitialState');

export const setNewReviewSendStatus = createAction<NewReviewSendStatus>('offer/setNewReviewSendStatus');
