import {City} from 'settings/city';
import {getStringHashCode} from 'utils/get-string-hash-code';
import {PlaceCard} from 'components/place-card/place-card';
import {PlacesSorting} from 'components/places-sorting/places-sorting';

type CityPlacesListProps = {
  cityName: City;
  cityPlacesCount: number;
};

const MOCK_PLACE_CARD_COUNT = 5;

function CityPlacesList({cityName, cityPlacesCount}: CityPlacesListProps): JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{cityPlacesCount} places to stay in <span className="places__city-name">{cityName}</span></b>
          <PlacesSorting />
          <div className="cities__places-list places__list tabs__content">
            {Array.from(Array(MOCK_PLACE_CARD_COUNT)).map((_, index) => <PlaceCard id={index + 1} key={getStringHashCode(`${index}${cityName}`)} />)}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map" />
        </div>
      </div>
    </div>
  );
}

export {CityPlacesList};
