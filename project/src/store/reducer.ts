import {City} from 'settings/city';
import {CityCode} from 'types/city-code';
import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_CITY_CODE} from 'settings/const';
import {Offers} from 'types/offer';
import {
  setCityCode,
  setCityOffers,
  setOffers
} from 'store/action';

type InitialState = {
  cityCode: CityCode;
  offers: Offers;
  cityOffers: Offers;
}

const initialState: InitialState = {
  cityCode: DEFAULT_CITY_CODE,
  offers: [],
  cityOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityCode, (state, action) => {
      const {cityCode} = action.payload;
      state.cityCode = cityCode;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(setCityOffers, (state) => {
      state.cityOffers = state.offers.filter((offer) => offer.city.name === City[state.cityCode as CityCode]);
    });
});

export {reducer};
