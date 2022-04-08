import {ApiRoute} from 'settings/api';
import {
  AppDispatch,
  State
} from 'types/state';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {DataLoadedStatus} from 'settings/data-loaded-status';
import {handleError} from 'services/handleError';
import {Offers} from 'types/offer';
import {
  setOffers,
  setDataLoadedStatus
} from 'store/offers/offers-reducer';

export const getOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'offers/getOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offers>(ApiRoute.GetOffers);
      dispatch(setOffers(data));
    } catch (error) {
      handleError(error);
      dispatch(setDataLoadedStatus(DataLoadedStatus.Error));
    }
  },
);
