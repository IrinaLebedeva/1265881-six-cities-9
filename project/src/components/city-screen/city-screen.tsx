import {CityTabs} from 'components/city-tabs/city-tabs';
import {CityPlacesList} from 'components/city-places-list/city-places-list';
import {CityPlacesListEmpty} from 'components/city-places-list-empty/city-places-list-empty';
import clsx from 'clsx';
import {selectSortedCurrentCityCodeOffers} from 'store/offers/selector';
import {useAppSelector} from 'hooks/use-redux-hooks';
import {useEffect} from 'react';

function CityScreen(): JSX.Element {
  const cityCode = useAppSelector((state) => state.cityReducer.cityCode);
  const cityOffers = useAppSelector(selectSortedCurrentCityCodeOffers);

  const sortType = useAppSelector((state) => state.offersReducer.offersSortType);
  useEffect(() => {
    // =) Why not? OK, I suppose, you might know the better way to rerender offers, please tell me 🙏
  }, [sortType]);

  return (
    <main className={clsx(
      'page__main',
      'page__main--index',
      {'page__main--index-empty': cityOffers.length === 0})}
    >
      <CityTabs activeCityCode={cityCode}/>
      {(cityOffers.length === 0) ?
        <CityPlacesListEmpty/> :
        <CityPlacesList cityCode={cityCode} offers={cityOffers}/>}
    </main>
  );
}

export {CityScreen};
