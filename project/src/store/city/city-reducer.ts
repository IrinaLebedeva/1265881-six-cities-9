import {CityCode} from 'types/city-code';
import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {DEFAULT_CITY_CODE} from 'settings/const';
import {NameSpace} from 'settings/name-space';

export type CityReducerInitialState = {
  cityCode: CityCode;
}

const initialState: CityReducerInitialState = {
  cityCode: DEFAULT_CITY_CODE,
};

export const cityReducer = createSlice({
  name: NameSpace.City,
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

export const {
  resetCityCode,
  setCityCode,
} = cityReducer.actions;
