import {AppRoute} from 'settings/app-route';
import {City} from 'settings/city';
import {CityCode} from 'types/city-code';
import {FavoritesCard} from 'components/favorites-card/favorites-card';
import {
  generatePath,
  Link
} from 'react-router-dom';
import {Offers} from 'types/offer';

type FavoritesListItemProps = {
  cityCode: string;
  offers: Offers;
};

function FavoritesListItem({cityCode, offers}: FavoritesListItemProps): JSX.Element {
  const offersByCity = offers.filter((offer) => offer.city.name === City[cityCode as CityCode]);
  return (
    <>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={generatePath(AppRoute.City, {cityCode: cityCode.toLowerCase()})} >
            <span>{City[cityCode as CityCode]}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offersByCity.map((offer) => <FavoritesCard offer={offer} key={offer.id} />)}
      </div>
    </>
  );
}

export {FavoritesListItem};
