import {AppRoute} from 'settings/app-route';
import CardBookmarkButton from 'components/card-bookmark-button/card-bookmark-button';
import {
  generatePath,
  Link
} from 'react-router-dom';
import {getRatingInPercent} from 'utils/get-rating-in-percent';
import {Offer} from 'types/offer';
import {useCallback} from 'react';

type CallbackType = (offerId: number) => void;

type PlaceCardProps = {
  offer: Offer;
  onMouseOverAndLeave?: CallbackType;
};

function PlaceCard({offer, onMouseOverAndLeave}: PlaceCardProps): JSX.Element {
  const handleMouseOver = useCallback(
    () => (onMouseOverAndLeave instanceof Function) ? onMouseOverAndLeave(offer.id) : null,
    [onMouseOverAndLeave, offer.id]);

  const handleMouseLeave = useCallback(
    () => (onMouseOverAndLeave instanceof Function) ? onMouseOverAndLeave(0) : null,
    [onMouseOverAndLeave]);

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {
        offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Property, {id: `${offer.id}`})}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt=""/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <CardBookmarkButton offer={offer}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingInPercent(offer.rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Property, {id: `${offer.id}`})}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export {PlaceCard};
