import {City} from 'settings/city';
import {CityTabs} from 'components/city-tabs/city-tabs';
import {CityPlacesList} from 'components/city-places-list/city-places-list';
import {Offers} from 'types/offer';

type CityScreenProps = {
  cityName: City;
  offers: Offers;
};

function CityScreen({cityName, offers}: CityScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <CityTabs />
      <CityPlacesList cityName={cityName} offers={offers}/>
    </main>
  );
}

export {CityScreen};
