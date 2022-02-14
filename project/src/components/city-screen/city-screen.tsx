import {CityTabs} from '../city-tabs/city-tabs';
import {Header} from '../header/header';
import {CityPlacesList} from '../city-places-list/city-places-list';

type CityScreenProps = {
  cityName: string,
  cityPlacesCount: number,
};

function CityScreen({cityName, cityPlacesCount}: CityScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <CityTabs />
        <CityPlacesList cityName={cityName} cityPlacesCount={cityPlacesCount}/>
      </main>
    </div>
  );
}

export {CityScreen};
