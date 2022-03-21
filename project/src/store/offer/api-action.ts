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
  async (offerId: string) => {
    try {
      const {data} = await api.get<Offer>(ApiRoute.GetOffer.replace('{offerId}', offerId));
      store.dispatch(setOffer({offer: data}));
    } catch (error) {
      handleError(error);
      store.dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const getOfferReviews = createAsyncThunk(
  'offer/getOfferReviews',
  async (offerId: string) => {
    try {
      const {data} = await api.get<Reviews>(ApiRoute.GetOfferReviews.replace('{offerId}', offerId));
      store.dispatch(setOfferReviews({reviews: data}));
    } catch (error) {
      handleError(error);
    }
  },
);

export const getOfferNearbyOffers = createAsyncThunk(
  'offer/getOfferNearbyOffers',
  async (offerId: string) => {
    try {
      const {data} = await api.get<Offers>(ApiRoute.GetOfferNearbyOffers.replace('{offerId}', offerId));
      store.dispatch(setOfferNearbyOffers({nearbyOffers: data}));
    } catch (error) {
      handleError(error);
    }
  },
);
