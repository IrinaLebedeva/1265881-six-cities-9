import {City} from 'types/city';
import {DEFAULT_CITY_CODE} from 'settings/const';
import {makeFakeLocation} from 'utils/mocks/make-fake-location';

export const makeFakeCity = ():City => (
  {
    name: DEFAULT_CITY_CODE,
    location: makeFakeLocation(),
  }
);
