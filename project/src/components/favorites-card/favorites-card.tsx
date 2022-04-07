import {AppRoute} from 'settings/app-route';
import CardBookmarkButton from 'components/card-bookmark-button/card-bookmark-button';
import {generatePath} from 'react-router-dom';
import {getRatingInPercent} from 'utils/get-rating-in-percent';
import {Link} from 'react-router-dom';
import {Offer} from 'types/offer';
import {offerTypes} from 'settings/offer-types';
import {OfferTypeCode} from 'types/offer-type-code';

type FavoritesCardProps = {
  offer: Offer;
};

function FavoritesCard({offer}: FavoritesCardProps): JSX.Element {
  return (
    <article className="favorites__card place-card" data-testid="favorites-place-card">
      {
        offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Property, {id: `${offer.id}`})}>
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
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
        <p className="place-card__type">{offerTypes[offer.type as OfferTypeCode]}</p>
      </div>
    </article>
  );
}

export {FavoritesCard};
