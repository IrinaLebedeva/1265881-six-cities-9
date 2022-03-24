import {createSelector} from 'reselect';
import {Offer, Offers} from 'types/offer';
import {Reviews} from 'types/review';
import {State} from 'types/state';
import {sortReviewsByDateDesc} from 'utils/sort-reviews';

export const getOffer = (state: State): Offer | null => state.offerReducer.offer;

export const getNearbyOffers = (state: State): Offers => state.offerReducer.nearbyOffers;

const getReviews = (state: State): Reviews => state.offerReducer.reviews;

export const getSortedReviews = createSelector(
  [getReviews],
  (reviews) => reviews.slice().sort(sortReviewsByDateDesc),
);
