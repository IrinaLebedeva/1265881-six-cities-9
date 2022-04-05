import {
  City,
  cityCodes
} from 'settings/city';
import {getFavoriteOffersData} from 'store/favorite-offers/api-action';
import {
  getFavoriteOffers,
  getIsFavoriteOffersDataLoaded
} from 'store/favorite-offers/selector';
import {FavoritesEmptyScreen} from 'components/favorites-empty-screen/favorites-empty-screen';
import {FavoritesListItem} from 'components/favorites-list-item/favorites-list-item';
import {LoadingScreen} from 'components/loading-screen/loading-screen';
import {
  useAppDispatch,
  useAppSelector
} from 'hooks/use-redux-hooks';
import {useEffect} from 'react';


function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector(getFavoriteOffers);
  const isFavoriteOffersDataLoaded = useAppSelector(getIsFavoriteOffersDataLoaded);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!offers || !isFavoriteOffersDataLoaded) {
      dispatch(getFavoriteOffersData());
    }
  }, [dispatch, offers, isFavoriteOffersDataLoaded]);

  if (!isFavoriteOffersDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  if (!offers.length) {
    return (
      <FavoritesEmptyScreen />
    );
  }

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
