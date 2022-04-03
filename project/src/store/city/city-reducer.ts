import {CityCode} from 'types/city-code';
import {createSlice} from '@reduxjs/toolkit';
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
    setCityCode: (state, action) => {
      const {cityCode} = action.payload;
      state.cityCode = cityCode;
    },
  },
});

export const {resetCityCode, setCityCode} = cityReducer.actions;
