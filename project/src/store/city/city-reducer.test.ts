import {cityReducer} from './city-reducer';
import {DEFAULT_CITY_CODE} from 'settings/const';

describe('cityReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(cityReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({cityCode: DEFAULT_CITY_CODE})
  })

});
