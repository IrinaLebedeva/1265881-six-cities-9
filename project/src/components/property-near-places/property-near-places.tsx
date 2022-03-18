import {Offers} from 'types/offer';
import {PlaceCard} from 'components/place-card/place-card';

type PropertyNearPlacesProps = {
  offers: Offers;
}

function PropertyNearPlaces({offers}: PropertyNearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => <PlaceCard offer={offer} key={offer.id}/>)}
      </div>
    </section>
  );
}

export {PropertyNearPlaces};
