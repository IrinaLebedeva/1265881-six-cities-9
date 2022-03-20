import {
  api,
  store
} from 'store/store';
import {ApiRoute} from 'settings/api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Offer} from 'types/offer';
import {handleError} from 'services/handleError';
import {
  setIsOfferLoaded,
  setOffer
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
