import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

type NearPlaceCardProps = {
  id: number;
};

function NearPlaceCard({id}: NearPlaceCardProps): JSX.Element {
  return (
    <article className="near-places__card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Property}/${id}`}>
          <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;180</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Property}/${id}`}>Nice, cozy, warm big bed apartment</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export {NearPlaceCard};