import {City} from 'settings/city';
import {CityTabs} from 'components/city-tabs/city-tabs';
import {CityPlacesList} from 'components/city-places-list/city-places-list';
import {Offers} from 'types/offer';

type CityScreenProps = {
  cityCode: keyof typeof City;
  offers: Offers;
};

function CityScreen({cityCode, offers}: CityScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <CityTabs />
      <CityPlacesList cityCode={cityCode} offers={offers}/>
    </main>
  );
}

export {CityScreen};
