import {
  api,
  store
} from 'store/store';
import {ApiRoute} from 'settings/api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Offers} from 'types/offer';
import {setOffers} from 'store/offers/action';

export const getOffers = createAsyncThunk(
  'offers/getOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(ApiRoute.GetOffers);
      store.dispatch(setOffers({offers: data}));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
);
