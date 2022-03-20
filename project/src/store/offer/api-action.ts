import {
  api,
  store
} from 'store/store';
import {ApiRoute} from 'settings/api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {handleError} from 'services/handleError';
import {Offer} from 'types/offer';
import {Reviews} from 'types/review';
import {
  setIsOfferLoaded,
  setOffer, setOfferReviews
} from 'store/offer/action';

export const getOfferById = createAsyncThunk(
  'offer/getOfferById',
  async (offerId: string) => {
    try {
      const {data} = await api.get<Offer>(ApiRoute.GetOffer.replace('{offerId}', offerId));
      store.dispatch(setOffer({offer: data}));
      store.dispatch(setIsOfferLoaded({isOfferLoaded: true}));
    } catch (error) {
      handleError(error);
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
