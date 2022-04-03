import {CardBookmarkButton} from 'components/card-bookmark-button/card-bookmark-button';
import {getIsUserAuthorized} from 'store/user/selector';
import {
  getNearbyOffers,
  getOffer,
  getSortedReviews
} from 'store/offer/selector';
import {getRatingInPercent} from 'utils/get-rating-in-percent';
import {loadOfferData} from 'store/offer/api-action';
import {LoadingScreen} from 'components/loading-screen/loading-screen';
import {Map} from 'components/map/map';
import {PropertyHost} from 'components/property-host/property-host';
import {PropertyNearPlaces} from 'components/property-near-places/property-near-places';
import {PropertyReviews} from 'components/property-reviews/property-reviews';
import {PropertyReviewsForm} from 'components/property-reviews-form/property-reviews-form';
import {useAppSelector} from 'hooks/use-redux-hooks';
import {
  useEffect,
  useMemo
} from 'react';
import {useParams} from 'react-router-dom';

function PropertyScreen(): JSX.Element {
  const params = useParams();
  const isUserAuthorized = useAppSelector(getIsUserAuthorized);
  const offer = useAppSelector(getOffer);
  const offerReviews = useAppSelector(getSortedReviews);
  const offerNearbyOffers = useAppSelector(getNearbyOffers);
  const id = +(params?.id || 0);

  useEffect(() => {
    if (!offer || offer.id !== id) {
      loadOfferData(id);
    }
  }, [id, offer, offerNearbyOffers, offerReviews]);

  const mapOffers = useMemo(() => !offer ? [] : [offer, ...offerNearbyOffers],
    [offer, offerNearbyOffers]);

  if (!offer) {
    return (
      <LoadingScreen />
    );
  }

  const reviewsForm = (isUserAuthorized) ? <PropertyReviewsForm offerId={offer.id}/> : undefined;

  const iconSize = {
    width: 31,
    height: 33,
  };

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
              <CardBookmarkButton offer={offer} cssElement={'property'} iconSize={iconSize}/>
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
            <PropertyReviews reviews={offerReviews} reviewsForm={reviewsForm}/>
          </div>
        </div>
        <section className="property__map map">
          <Map offers={mapOffers} activeOfferId={offer.id}/>
        </section>
      </section>
      <div className="container">
        <PropertyNearPlaces offers={offerNearbyOffers} />
      </div>
    </main>
  );
}

export {PropertyScreen};
