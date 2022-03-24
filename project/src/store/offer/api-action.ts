import {
  api,
  store
} from 'store/store';
import {ApiRoute} from 'settings/api';
import {AppRoute} from 'settings/app-route';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {handleError} from 'services/handleError';
import {
  Offer,
  Offers
} from 'types/offer';
import {redirectToRoute} from 'store/user/action';
import {Reviews} from 'types/review';
import {
  setOffer,
  setOfferNearbyOffers,
  setOfferReviews
} from 'store/offer/action';

export const getOfferById = createAsyncThunk(
  'offer/getOfferById',
  async (offerId: number) => {
    try {
      const {data} = await api.get<Offer>(ApiRoute.GetOffer.replace('{offerId}', String(offerId)));
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
      const {data} = await api.get<Reviews>(ApiRoute.GetOfferReviews.replace('{offerId}', String(offerId)));
      store.dispatch(setOfferReviews(data));
    } catch (error) {
      handleError(error);
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
