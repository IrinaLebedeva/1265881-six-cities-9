import {City} from 'settings/city';
import {CityTabs} from 'components/city-tabs/city-tabs';
import {CityPlacesList} from 'components/city-places-list/city-places-list';
import {Offers} from 'types/offer';

type CityScreenProps = {
  cityName: City;
  cityPlacesCount: number;
  offers: Offers;
};

function CityScreen({cityName, cityPlacesCount, offers}: CityScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <CityTabs />
      <CityPlacesList cityName={cityName} cityPlacesCount={cityPlacesCount} offers={offers}/>
    </main>
  );
}

export {CityScreen};
