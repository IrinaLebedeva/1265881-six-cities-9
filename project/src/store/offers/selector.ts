import {State} from 'types/state';
import {City} from 'settings/city';
import {CityCode} from 'types/city-code';
import {createSelector} from 'reselect';
import {Offers} from 'types/offer';
import {OfferSortCode} from 'settings/offers-sort-type';
import {OffersSortTypeKey} from 'types/offers-sort-type-key';
import {
  sortOffersByPriceAsc,
  sortOffersByPriceDesc,
  sortOffersByRatingDesc
} from 'utils/sort-offers';
import {NameSpace} from 'settings/name-space';

const getCurrentCityCode = (state: State): CityCode => state[NameSpace.City].cityCode;

const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;

const getIsOffersLoaded = (state: State): boolean => state[NameSpace.Offers].isOffersLoaded;

const getOffersByCity = createSelector(
  [getCurrentCityCode, getOffers], (currentCityCode, offers) => (
    offers.filter((offer) => offer.city.name === City[currentCityCode as CityCode])
  ));

const getOffersSortType = (state: State): OffersSortTypeKey => state[NameSpace.Offers].offersSortType;

const getSortedOffers = createSelector(
  [getOffersSortType, getOffersByCity],
  (offersSortType, offers) => {
    const sortedOffers = offers.slice();
    switch (offersSortType) {
      case OfferSortCode.PriceHighToLow:
        sortedOffers.sort(sortOffersByPriceDesc);
        break;
      case OfferSortCode.PriceLowToHigh:
        sortedOffers.sort(sortOffersByPriceAsc);
        break;
      case OfferSortCode.TopRatedFirst:
        sortedOffers.sort(sortOffersByRatingDesc);
        break;
      case OfferSortCode.Popular:
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
