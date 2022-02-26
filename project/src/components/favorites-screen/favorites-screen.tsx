import {City} from 'settings/city';
import {FavoritesListItem} from 'components/favorites-list-item/favorites-list-item';
import {Offers} from 'types/offer';

type FavoritesScreenProps = {
  offers: Offers;
}

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  const cityValues: string[] = Object.values(City);
  const favoriteCities: string[] = [];
  const favoritesElement: JSX.Element[] = [];

  offers.map((offer) => {
    if (!favoriteCities.includes(offer.city.name)) {
      favoriteCities.push(offer.city.name);

      const cityCode = Object.keys(City)[cityValues.indexOf(offer.city.name)];
      if (typeof cityCode === 'undefined') {
        return;
      }

      favoritesElement.push(
        <li className="favorites__locations-items" key={cityCode} >
          <FavoritesListItem cityCode={cityCode} offers={offers}/>
        </li>,
      );
    }
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
