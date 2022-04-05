import {City} from 'settings/city';
import {CityCode} from 'types/city-code';
import {Map} from 'components/map/map';
import {Offers} from 'types/offer';
import {PlaceCard} from 'components/place-card/place-card';
import PlacesSorting from 'components/places-sorting/places-sorting';
import {useState} from 'react';

import './css/places.css';

interface CityPlacesListProps  {
  cityCode: CityCode;
  offers: Offers;
}

function CityPlacesList({cityCode, offers}: CityPlacesListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number>(0);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in <span className="places__city-name">{City[cityCode as CityCode]}</span></b>
          <PlacesSorting/>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => <PlaceCard offer={offer} key={offer.id} onMouseOverAndLeave={setActiveCardId}/>)}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map" >
            <Map offers={offers} activeOfferId={activeCardId}/>
          </section>
        </div>
      </div>
    </div>
  );
}

export {CityPlacesList};
