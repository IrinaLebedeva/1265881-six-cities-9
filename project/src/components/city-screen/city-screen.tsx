import {CityCode} from 'types/city-code';
import {CityTabs} from 'components/city-tabs/city-tabs';
import {CityPlacesList} from 'components/city-places-list/city-places-list';
import {Offers} from 'types/offer';

type CityScreenProps = {
  cityCode: CityCode;
  offers: Offers;
};

function CityScreen({cityCode, offers}: CityScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <CityTabs activeCityCode={cityCode}/>
      <CityPlacesList cityCode={cityCode} offers={offers}/>
    </main>
  );
}

export {CityScreen};
