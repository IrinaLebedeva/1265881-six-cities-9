import {City} from 'settings/city';
import {CityCode} from 'types/city-code';
import {shuffleArray} from 'utils/shuffle-array';

export const getRandomCity = () => {
  const shuffledCity = shuffleArray(Object.keys(City));
  const lastCity = shuffledCity.pop();

  return {
    cityCode: lastCity,
    cityName: City[lastCity as CityCode],
  };
};
