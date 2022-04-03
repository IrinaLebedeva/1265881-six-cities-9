import {CityCode} from 'types/city-code';
import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {DEFAULT_CITY_CODE} from 'settings/const';
import {StoreNamespace} from 'settings/store-namespace';

type InitialState = {
  cityCode: CityCode;
}

const initialState: InitialState = {
  cityCode: DEFAULT_CITY_CODE,
};

export const cityReducer = createSlice({
  name: StoreNamespace.City,
  initialState,
  reducers: {
    resetCityCode: (state) => {
      state.cityCode = DEFAULT_CITY_CODE;
    },
    setCityCode: (state, action:PayloadAction<CityCode>) => {
      state.cityCode = action.payload;
    },
  },
});

export const {resetCityCode, setCityCode} = cityReducer.actions;
