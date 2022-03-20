import {
  api,
  store
} from 'store/store';
import {ApiRoute} from 'settings/api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Offers} from 'types/offer';
import {setOffers} from 'store/offers/action';
import {handleError} from 'services/handleError';

export const getOffers = createAsyncThunk(
  'offers/getOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(ApiRoute.GetOffers);
      store.dispatch(setOffers({offers: data}));
    } catch (error) {
      handleError(error);
    }
  },
);
