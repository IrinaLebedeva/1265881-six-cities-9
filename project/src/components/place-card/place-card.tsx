import {AppRoute} from 'settings/app-route';
import clsx from 'clsx';
import {
  generatePath,
  Link
} from 'react-router-dom';
import {getOfferPremiumJsxElement} from 'utils/get-offer-premium-jsx-element';
import {getRatingInPercent} from 'utils/get-rating-in-percent';
import {Offer} from 'types/offer';
import {useState} from 'react';

type PlaceCardProps = {
  offer: Offer;
};

function PlaceCard({offer}: PlaceCardProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState(0);
  // eslint-disable-next-line  no-console
  console.log(activeCardId);
  return (
    <article className="cities__place-card place-card" onMouseOver={() => setActiveCardId(offer.id)}>
      {getOfferPremiumJsxElement(offer.isPremium)}
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
          <button
            className={clsx('place-card__bookmark-button', {'place-card__bookmark-button--active': offer.isFavorite}, 'button')}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingInPercent(offer.rating)}%`}}/>
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
