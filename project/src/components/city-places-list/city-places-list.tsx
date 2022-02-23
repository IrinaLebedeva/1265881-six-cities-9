import {City} from 'settings/city';
import {Offers} from 'types/offer';
import {PlaceCard} from 'components/place-card/place-card';
import {PlacesSorting} from 'components/places-sorting/places-sorting';

type CityPlacesListProps = {
  cityName: City;
  cityPlacesCount: number;
  offers: Offers;
};

function CityPlacesList({cityName, cityPlacesCount, offers}: CityPlacesListProps): JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{cityPlacesCount} places to stay in <span className="places__city-name">{cityName}</span></b>
          <PlacesSorting />
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => <PlaceCard offer={offer} key={offer.id} />)}
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
