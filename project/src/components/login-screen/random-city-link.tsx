import {AppRoute} from 'settings/app-route';
import {
  generatePath,
  Link
} from 'react-router-dom';
import {getRandomCity} from 'utils/get-random-city';
import {memo} from 'react';

function RandomCityLink(): JSX.Element {
  const randomCity = getRandomCity();

  return (
    <Link className="locations__item-link" to={generatePath(AppRoute.City, {cityCode: randomCity.cityCode})}>
      <span>{randomCity.cityName}</span>
    </Link>
  );
}

export default memo(RandomCityLink);
