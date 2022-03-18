import {AppRoute} from 'settings/app-route';
import {
  City,
  cityCodes
} from 'settings/city';
import {CityCode} from 'types/city-code';
import clsx from 'clsx';
import {
  generatePath,
  Link
} from 'react-router-dom';

interface CityTabsProps {
  activeCityCode: CityCode;
  handleCityChange: (cityCode: CityCode) => () => void;
}

function CityTabs({activeCityCode, handleCityChange}: CityTabsProps): JSX.Element {
  const cityTabs = cityCodes.map((cityCode) => (
    <li className="locations__item" key={cityCode}>
      <Link
        to={generatePath(AppRoute.City, {cityCode: cityCode.toLowerCase()})}
        className={clsx(
          'locations__item-link',
          'tabs__item',
          {'tabs__item--active': cityCode === activeCityCode})}
        onClick={handleCityChange(cityCode as CityCode)}
      >
        <span>{City[cityCode as CityCode]}</span>
      </Link>
    </li>
  ));

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cityTabs}
          </ul>
        </section>
      </div>
    </>
  );
}

export {CityTabs};
