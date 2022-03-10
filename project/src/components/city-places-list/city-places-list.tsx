import {City} from 'settings/city';
import {CityCode} from 'types/city-code';
import {DEFAULT_OFFERS_SORT_TYPE, OffersSortCodes} from 'settings/offers-sort-type';
import {Map} from 'components/map/map';
import {Offers} from 'types/offer';
import {OffersSortTypeKey} from 'types/offers-sort-type-key';
import {PlaceCardContainer} from 'components/place-card-container/place-card-container';
import {PlacesSorting} from 'components/places-sorting/places-sorting';
import {
  sortOffersByPriceHighToLow,
  sortOffersByPriceLowToHigh,
  sortOffersByTopRatedFirst
} from 'utils/sort-offers';
import {
  useEffect,
  useState
} from 'react';

type CityPlacesListProps = {
  cityCode: CityCode;
  offers: Offers;
};

const getSortedOffers = (sortType: OffersSortTypeKey, offers:Offers): Offers => {
  const sortedOffers = offers.slice();
  switch (sortType) {
    case OffersSortCodes.PRICE_HIGH_TO_LOW:
      sortedOffers.sort(sortOffersByPriceHighToLow);
      break;
    case OffersSortCodes.PRICE_LOW_TO_HIGH:
      sortedOffers.sort(sortOffersByPriceLowToHigh);
      break;
    case OffersSortCodes.TOP_RATED_FIRST:
      sortedOffers.sort(sortOffersByTopRatedFirst);
      break;
    case OffersSortCodes.POPULAR:
    default:
      break;
  }
  return sortedOffers;
};

function CityPlacesList({cityCode, offers}: CityPlacesListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number>(0);
  const [sortType, setSortType] = useState<OffersSortTypeKey>(DEFAULT_OFFERS_SORT_TYPE);
  const [sortedOffers, setSortedOffers] = useState<Offers>(offers);

  useEffect(() => {
    setSortedOffers(getSortedOffers(sortType, offers));
  }, [cityCode, sortType]);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in <span className="places__city-name">{City[cityCode as CityCode]}</span></b>
          <PlacesSorting sortType={sortType} setSortTypeCallback={setSortType}/>
          <div className="cities__places-list places__list tabs__content">
            {sortedOffers.map((offer) => <PlaceCardContainer offer={offer} key={offer.id} setActiveCardIdCallback={setActiveCardId}/>)}
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
