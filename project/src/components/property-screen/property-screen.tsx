import clsx from 'clsx';
import {getRatingInPercent} from 'utils/get-rating-in-percent';
import {getOfferById} from 'store/offer/api-action';
import {LoadingScreen} from 'components/loading-screen/loading-screen';
import {Map} from 'components/map/map';
import {useParams} from 'react-router-dom';
import {nearbyOffers} from 'fixture/nearby-offers';
import {PropertyHost} from 'components/property-host/property-host';
import {PropertyReviews} from 'components/property-reviews/property-reviews';
import {PropertyNearPlaces} from 'components/property-near-places/property-near-places';
import {reviews} from 'fixture/reviews';
import {
  useAppDispatch,
  useAppSelector
} from 'hooks/use-redux-hooks';

function PropertyScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const {isOfferLoaded, offer} = useAppSelector((state) => state.offerReducer);

  dispatch(getOfferById(`${params.id}`));

  if (!isOfferLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.images.map((image, index) => {
              const key = `${index}-image`;
              return (
                <div className="property__image-wrapper" key={key}>
                  <img className="property__image" src={image} alt=""/>
                </div>
              );
            })}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {(!offer.isPremium) ? '' :
              <div className="property__mark">
                <span>Premium</span>
              </div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
              <button
                className={clsx('property__bookmark-button', {'property__bookmark-button--active': offer.isFavorite}, 'button')}
                type="button"
              >
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: getRatingInPercent(offer.rating)}}/>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {offer.goods.map((goodsItem, index) => {
                  const key = `${index}-goods`;
                  return (
                    <li className="property__inside-item" key={key}>
                      {goodsItem}
                    </li>
                  );
                })}
              </ul>
            </div>
            <PropertyHost offer={offer} />
            <PropertyReviews reviews={reviews}/>
          </div>
        </div>
        <section className="property__map map">
          <Map offers={[offer, ...nearbyOffers]} activeOfferId={offer.id}/>
        </section>
      </section>
      <div className="container">
        <PropertyNearPlaces offers={nearbyOffers} />
      </div>
    </main>
  );
}

export {PropertyScreen};
