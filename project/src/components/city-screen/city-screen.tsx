import {CityTabs} from '../city-tabs/city-tabs';
import {Header} from '../header/header';
import {CityPlacesList} from '../city-places-list/city-places-list';

type CityScreenProps = {
  cityPlacesCount: number;
}

function CityScreen({cityPlacesCount}: CityScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <CityTabs />
        <CityPlacesList cityPlacesCount={cityPlacesCount}/>
      </main>
    </div>
  );
}

export {CityScreen};
