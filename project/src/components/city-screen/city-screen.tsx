import {CityTabs} from 'components/city-tabs/city-tabs';
import {CityPlacesList} from 'components/city-places-list/city-places-list';
import {setCityOffers} from 'store/action';
import {
  useAppDispatch,
  useAppSelector
} from 'hooks/use-redux-hooks';
import {useParams} from 'react-router-dom';

function CityScreen(): JSX.Element {
  const {cityCode} = useParams();
  // eslint-disable-next-line no-console
  console.log(cityCode);

  const dispatch = useAppDispatch();
  const currentCityCode = useAppSelector((state) => state.cityCode);

  dispatch(setCityOffers());
  const cityOffers = useAppSelector((state) => state.cityOffers);

  return (
    <main className="page__main page__main--index">
      <CityTabs activeCityCode={currentCityCode}/>
      <CityPlacesList cityCode={currentCityCode} offers={cityOffers}/>
    </main>
  );
}

export {CityScreen};
