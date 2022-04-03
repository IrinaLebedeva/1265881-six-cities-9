import {
  api,
  store
} from 'store/store';
import {ApiRoute} from 'settings/api';
import {AppRoute} from 'settings/app-route';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {handleError} from 'services/handleError';
import {
  NewReview,
  Reviews
} from 'types/review';
import {NewReviewSendStatus} from 'settings/new-review-send-status';
import {
  Offer,
  Offers
} from 'types/offer';
import {redirectToRoute} from 'store/user/action';
import {
  setNewReviewSendStatus,
  setOffer,
  setOfferNearbyOffers,
  setOfferReviews
} from 'store/offer/offer-reducer';
import {StoreNamespace} from 'settings/store-namespace';

export const getOfferById = createAsyncThunk(
  'offer/getOfferById',
  async (offerId: number) => {
    try {
      const {data} = await api.get<Offer>(`${ApiRoute.GetOffers}/${offerId}`);
      store.dispatch(setOffer(data));
    } catch (error) {
      handleError(error);
      store.dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const getOfferReviews = createAsyncThunk(
  'offer/getOfferReviews',
  async (offerId: number) => {
    try {
      const {data} = await api.get<Reviews>(`${ApiRoute.OfferReviews}/${offerId}`);
      store.dispatch(setOfferReviews(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const setOfferReview = createAsyncThunk(
  'offer/setOfferReview',
  async (newOfferReview: NewReview) => {
    try {
      const {offerId, comment, rating} = newOfferReview;
      await api.post(
        `${ApiRoute.OfferReviews}/${offerId}`,
        {comment, rating},
      );
      store.dispatch(setNewReviewSendStatus(NewReviewSendStatus.Success));
    } catch (error) {
      handleError(error);
      store.dispatch(setNewReviewSendStatus(NewReviewSendStatus.Error));
    }
  },
);

export const getOfferNearbyOffers = createAsyncThunk(
  'offer/getOfferNearbyOffers',
  async (offerId: number) => {
    try {
      const {data} = await api.get<Offers>(ApiRoute.GetOfferNearbyOffers.replace('{offerId}', String(offerId)));
      store.dispatch(setOfferNearbyOffers(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const loadOfferData = (id?: number) => {
  if (!id) {
    id = store.getState()[StoreNamespace.Offer].offer?.id;

    if (typeof id === 'undefined') {
      return;
    }
  }

  store.dispatch(getOfferById(id));
  store.dispatch(getOfferReviews(id));
  store.dispatch(getOfferNearbyOffers(id));
};
