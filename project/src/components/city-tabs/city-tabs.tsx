import {AppRoute} from 'settings/app-route';
import {City} from 'settings/city';
import {CityCode} from 'types/city-code';
import {
  generatePath,
  Link
} from 'react-router-dom';

function CityTabs(): JSX.Element {
  const cityTabs = [];
  for (const cityCode in City) {
    cityTabs.push(
      <li className="locations__item" key={cityCode}>
        <Link to={generatePath(AppRoute.City, {cityCode})} className="locations__item-link tabs__item">
          <span>{City[cityCode as CityCode]}</span>
        </Link>
      </li>);
  }

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
