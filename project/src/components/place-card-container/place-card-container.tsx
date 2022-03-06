import {Offer} from 'types/offer';
import {PlaceCard} from 'components/place-card/place-card';

type CallbackType = (offerId: number) => void;

type PlaceCardContainerProps = {
  offer: Offer;
  setActiveCardIdCallback?: CallbackType;
};

function PlaceCardContainer({offer, setActiveCardIdCallback}: PlaceCardContainerProps): JSX.Element {
  if (typeof setActiveCardIdCallback !== 'undefined') {
    return (
      <article
        className="cities__place-card place-card"
        onMouseOver={() => setActiveCardIdCallback(offer.id)}
        onMouseLeave={() => setActiveCardIdCallback(0)}
      >
        <PlaceCard offer={offer} />
      </article>
    );
  }
  return (
    <article className="cities__place-card place-card">
      <PlaceCard offer={offer} />
    </article>
  );
}

export {PlaceCardContainer};
