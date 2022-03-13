import {CityCode} from 'types/city-code';
import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_CITY_CODE} from 'settings/const';
import {Offers} from 'types/offer';
import {offers as fixtureOffers} from 'fixture/offers';
import {
  resetCityCode,
  setCityCode
} from 'store/action';

type InitialState = {
  cityCode: CityCode;
  offers: Offers;
}

const initialState: InitialState = {
  cityCode: DEFAULT_CITY_CODE,
  offers: fixtureOffers,
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
