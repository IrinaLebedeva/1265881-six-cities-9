import {PlaceCard} from '../place-card/place-card';
import {PlacesSorting} from '../places-sorting/places-sorting';

type CityPlacesListProps = {
  cityPlacesCount: number;
}

function CityPlacesList({cityPlacesCount}: CityPlacesListProps): JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{cityPlacesCount} places to stay in Amsterdam</b>
          <PlacesSorting />
          <div className="cities__places-list places__list tabs__content">
            <PlaceCard />
            <PlaceCard />
            <PlaceCard />
            <PlaceCard />
            <PlaceCard />
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}

export {CityPlacesList};
