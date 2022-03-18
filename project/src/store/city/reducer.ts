import {CityCode} from 'types/city-code';
import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_CITY_CODE} from 'settings/const';
import {
  resetCityCode,
  setCityCode
} from 'store/city/action';

type InitialState = {
  cityCode: CityCode;
}

const initialState: InitialState = {
  cityCode: DEFAULT_CITY_CODE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetCityCode, (state) => {
      state.cityCode = DEFAULT_CITY_CODE;
    })
    .addCase(setCityCode, (state, action) => {
      const {cityCode} = action.payload;
      state.cityCode = cityCode;
    });
});

export {reducer};
