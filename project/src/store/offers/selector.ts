import {State} from 'types/state';
import {City} from 'settings/city';
import {CityCode} from 'types/city-code';
import {OffersSortCodes} from 'settings/offers-sort-type';
import {
  sortOffersByPriceAsc,
  sortOffersByPriceDesc,
  sortOffersByRatingDesc
} from 'utils/sort-offers';

const selectCurrentCityCodeOffers = (state: State) => (
  state.offersReducer.offers.filter((offer) => offer.city.name === City[state.cityReducer.cityCode as CityCode])
);

const selectSortedCurrentCityCodeOffers = (state: State) => {
  const sortedOffers = selectCurrentCityCodeOffers(state);
  switch (state.offersReducer.offersSortType) {
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
};

export {
  selectCurrentCityCodeOffers,
  selectSortedCurrentCityCodeOffers
};
