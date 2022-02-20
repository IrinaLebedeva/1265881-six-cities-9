import {City} from 'settings/city';
import {CityTabs} from 'components/city-tabs/city-tabs';
import {CityPlacesList} from 'components/city-places-list/city-places-list';

type CityScreenProps = {
  cityName: City;
  cityPlacesCount: number;
};

function CityScreen({cityName, cityPlacesCount}: CityScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <CityTabs />
      <CityPlacesList cityName={cityName} cityPlacesCount={cityPlacesCount}/>
    </main>
  );
}

export {CityScreen};
