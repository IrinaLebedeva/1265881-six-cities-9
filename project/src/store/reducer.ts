import {CityCode} from 'types/city-code';
import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_CITY_CODE} from 'settings/const';
import {Offers} from 'types/offer';
import {
  resetCityCode,
  setCityCode,
  setOffers
} from 'store/action';

type InitialState = {
  cityCode: CityCode;
  offers: Offers;
}

const initialState: InitialState = {
  cityCode: DEFAULT_CITY_CODE,
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetCityCode, (state) => {
      state.cityCode = DEFAULT_CITY_CODE;
    })
    .addCase(setCityCode, (state, action) => {
      const {cityCode} = action.payload;
      state.cityCode = cityCode;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export {reducer};
