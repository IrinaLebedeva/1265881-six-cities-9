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

function FavoritesListItem({cityCode, offers}:FavoritesListItemProps): JSX.Element {
  const offersByCity: JSX.Element[] = [];
  offers.map((offer) => {
    if (offer.city.name === City[cityCode as CityCode]) {
      offersByCity.push(
        <FavoritesCard offer={offer} key={offer.id} />,
      );
    }
  });

  return (
    <>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={generatePath(AppRoute.City, {cityCode: cityCode})} >
            <span>{City[cityCode as CityCode]}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offersByCity}
      </div>
    </>
  );
}

export {FavoritesListItem};
