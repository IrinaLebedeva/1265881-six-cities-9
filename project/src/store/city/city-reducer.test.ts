import {DEFAULT_CITY_CODE} from 'settings/const';
import {City} from 'settings/city';
import {
  cityReducer,
  CityReducerInitialState,
  resetCityCode,
  setCityCode
} from './city-reducer';

const fakeCityInitialState: CityReducerInitialState = {
  cityCode: DEFAULT_CITY_CODE,
};

describe('cityReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(cityReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(fakeCityInitialState);
  });

  it(`should set city code to "${City.Amsterdam}"`, () => {
    expect(cityReducer.reducer(
      fakeCityInitialState,
      setCityCode(City.Amsterdam),
    ))
      .toEqual({cityCode: City.Amsterdam});
  });

  it(`should reset city code to default value "${DEFAULT_CITY_CODE}"`, () => {
    expect(cityReducer.reducer(
      fakeCityInitialState,
      resetCityCode,
    ))
      .toEqual({cityCode: DEFAULT_CITY_CODE});
  });

});
