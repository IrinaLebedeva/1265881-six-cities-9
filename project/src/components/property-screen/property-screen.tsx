import {AuthorizationStatus} from 'settings/authorization-status';
import clsx from 'clsx';
import {getAuthorizationStatus} from 'store/user/selector';
import {
  getNearbyOffers,
  getOffer,
  getReviews
} from 'store/offer/selector';
import {getRatingInPercent} from 'utils/get-rating-in-percent';
import {
  getOfferById,
  getOfferNearbyOffers,
  getOfferReviews
} from 'store/offer/api-action';
import {LoadingScreen} from 'components/loading-screen/loading-screen';
import {Map} from 'components/map/map';
import {PropertyHost} from 'components/property-host/property-host';
import {PropertyNearPlaces} from 'components/property-near-places/property-near-places';
import {PropertyReviews} from 'components/property-reviews/property-reviews';
import {PropertyReviewsForm} from 'components/property-reviews-form/property-reviews-form';
import {resetToInitialState} from 'store/offer/action';
import {
  useAppDispatch,
  useAppSelector
} from 'hooks/use-redux-hooks';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

function PropertyScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offer = useAppSelector(getOffer);
  const reviews = useAppSelector(getReviews);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const id = Number(params.id);

  useEffect(() => {
    if (!offer || offer.id !== id) {
      dispatch(resetToInitialState());
      dispatch(getOfferById(`${id}`));
      dispatch(getOfferReviews(`${id}`));
      dispatch(getOfferNearbyOffers(`${id}`));
    }
  }, [dispatch, id, offer, nearbyOffers, reviews]);

  const reviewsForm = (authorizationStatus === AuthorizationStatus.Auth) ? <PropertyReviewsForm /> : null;

  if (!offer) {
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
            <PropertyReviews reviews={reviews} reviewsForm={reviewsForm}/>
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
