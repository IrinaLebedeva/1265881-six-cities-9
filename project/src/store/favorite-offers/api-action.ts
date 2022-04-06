import {
  api,
  store
} from 'store/store';
import {ApiRoute} from 'settings/api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {FavoriteOfferStatusData} from 'types/favorite-offer-status-data';
import {getOffers} from 'store/offers/api-action';
import {handleError} from 'services/handleError';
import {Offers} from 'types/offer';
import {setFavoriteOffers} from 'store/favorite-offers/favorite-offers-reducer';

export const getFavoriteOffersData = createAsyncThunk(
  'favorite-offers/getFavoriteOffersData',
  async () => {
    try {
      const {data} = await api.get<Offers>(ApiRoute.FavoriteOffers);
      store.dispatch(setFavoriteOffers(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const setFavoriteOfferStatus = createAsyncThunk(
  'favorite-offers/setFavoriteOfferStatus',
  async ({offerId, status}: FavoriteOfferStatusData) => {
    try {
      await api.post(`${ApiRoute.FavoriteOffers}/${offerId}/${status}`);
      store.dispatch(getOffers());
      store.dispatch(getFavoriteOffersData());
    } catch (error) {
      handleError(error);
    }
  },
);
