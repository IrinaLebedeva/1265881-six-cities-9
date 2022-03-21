import {State} from 'types/state';
import {Offer, Offers} from 'types/offer';
import {Reviews} from 'types/review';

export const getOffer = (state: State): Offer | null => state.offerReducer.offer;

export const getReviews = (state: State): Reviews => state.offerReducer.reviews;

export const getNearbyOffers = (state: State): Offers => state.offerReducer.nearbyOffers;
