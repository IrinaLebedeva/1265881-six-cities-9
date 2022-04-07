import {
  api,
  store
} from 'store/store';
import {ApiRoute} from 'settings/api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {DataLoadedStatus} from 'settings/data-loaded-status';
import {handleError} from 'services/handleError';
import {Offers} from 'types/offer';
import {
  setOffers,
  setDataLoadedStatus
} from 'store/offers/offers-reducer';

export const getOffers = createAsyncThunk(
  'offers/getOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(ApiRoute.GetOffers);
      store.dispatch(setOffers(data));
    } catch (error) {
      handleError(error);
      store.dispatch(setDataLoadedStatus(DataLoadedStatus.Error));
    }
  },
);
