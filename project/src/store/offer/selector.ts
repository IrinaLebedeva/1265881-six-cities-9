import {createSelector} from 'reselect';
import {NewReviewSendStatus} from 'settings/new-review-send-status';
import {
  Offer,
  Offers
} from 'types/offer';
import {Reviews} from 'types/review';
import {sortReviewsByDateDesc} from 'utils/sort-reviews';
import {State} from 'types/state';
import {StoreNamespace} from 'settings/store-namespace';

export const getOffer = (state: State): Offer | null => state[StoreNamespace.Offer].offer;

export const getNearbyOffers = (state: State): Offers => state[StoreNamespace.Offer].nearbyOffers;

const getReviews = (state: State): Reviews => state[StoreNamespace.Offer].reviews;

export const getSortedReviews = createSelector(
  [getReviews],
  (reviews) => reviews.slice().sort(sortReviewsByDateDesc),
);

export const getNewReviewSendStatus = (state: State): NewReviewSendStatus => state[StoreNamespace.Offer].newReviewSendStatus;
