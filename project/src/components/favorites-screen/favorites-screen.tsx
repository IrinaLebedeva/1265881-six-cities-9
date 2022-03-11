import {
  City,
  cityCodes
} from 'settings/city';
import {FavoritesListItem} from 'components/favorites-list-item/favorites-list-item';
import {Offers} from 'types/offer';

type FavoritesScreenProps = {
  offers: Offers;
}

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  const cityValues: string[] = Object.values(City);
  const favoriteCities: string[] = offers.reduce(
    (total: string[], offer) => !total.includes(offer.city.name) ? [...total, offer.city.name] : total
    , []);

  const favoritesElement: JSX.Element[] = favoriteCities.map((cityName) => {
    const cityCode = cityCodes[cityValues.indexOf(cityName)];
    return (
      <li className="favorites__locations-items" key={cityCode}>
        <FavoritesListItem cityCode={cityCode} offers={offers}/>
      </li>
    );
  });

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favoritesElement}
          </ul>
        </section>
      </div>
    </main>
  );
}

export {FavoritesScreen};
