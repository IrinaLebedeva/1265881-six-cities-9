import {State} from 'types/state';
import {City} from 'settings/city';
import {CityCode} from 'types/city-code';
import {createSelector} from 'reselect';
import {Offers} from 'types/offer';
import {OffersSortCodes} from 'settings/offers-sort-type';
import {OffersSortTypeKey} from 'types/offers-sort-type-key';
import {
  sortOffersByPriceAsc,
  sortOffersByPriceDesc,
  sortOffersByRatingDesc
} from 'utils/sort-offers';
import {StoreNamespace} from 'settings/store-namespace';

const getCurrentCityCode = (state: State): CityCode => state[StoreNamespace.City].cityCode;

const getOffers = (state: State): Offers => state[StoreNamespace.Offers].offers;

const getIsOffersLoaded = (state: State): boolean => state[StoreNamespace.Offers].isOffersLoaded;

const getOffersByCity = createSelector(
  [getCurrentCityCode, getOffers], (currentCityCode, offers) => (
    offers.filter((offer) => offer.city.name === City[currentCityCode as CityCode])
  ));

const getOffersSortType = (state: State): OffersSortTypeKey => state[StoreNamespace.Offers].offersSortType;

const getSortedOffers = createSelector(
  [getOffersSortType, getOffersByCity],
  (offersSortType, offers) => {
    const sortedOffers = offers.slice();
    switch (offersSortType) {
      case OffersSortCodes.PRICE_HIGH_TO_LOW:
        sortedOffers.sort(sortOffersByPriceDesc);
        break;
      case OffersSortCodes.PRICE_LOW_TO_HIGH:
        sortedOffers.sort(sortOffersByPriceAsc);
        break;
      case OffersSortCodes.TOP_RATED_FIRST:
        sortedOffers.sort(sortOffersByRatingDesc);
        break;
      case OffersSortCodes.POPULAR:
        break;
    }
    return sortedOffers;
  });

export {
  getCurrentCityCode,
  getIsOffersLoaded,
  getOffersSortType,
  getSortedOffers
};
