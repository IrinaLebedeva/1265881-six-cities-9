import {City} from 'settings/city';
import {CityCode} from 'types/city-code';
import {CityTabs} from 'components/city-tabs/city-tabs';
import {CityPlacesList} from 'components/city-places-list/city-places-list';
import {CityPlacesListEmpty} from 'components/city-places-list-empty/city-places-list-empty';
import clsx from 'clsx';
import {useAppSelector} from 'hooks/use-redux-hooks';

function CityScreen(): JSX.Element {
  const cityCode = useAppSelector((state) => state.cityCode);
  const offers = useAppSelector((state) => state.offers);
  const cityOffers = offers.filter((offer) => offer.city.name === City[cityCode as CityCode]);

  return (
    <main className={clsx('page__main', 'page__main--index', {'page__main--index-empty': cityOffers.length === 0})}>
      <CityTabs activeCityCode={cityCode}/>
      {(cityOffers.length === 0) ?
        <CityPlacesListEmpty/> :
        <CityPlacesList cityCode={cityCode} offers={cityOffers}/>}
    </main>
  );
}

export {CityScreen};
