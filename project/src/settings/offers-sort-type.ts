export enum OffersSortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const OffersSortCodes = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'PriceLowToHigh',
  PRICE_HIGH_TO_LOW: 'PriceHighToLow',
  TOP_RATED_FIRST: 'TopRatedFirst',
};

export const offersSortTypes = Object.keys(OffersSortType);

export const DEFAULT_OFFERS_SORT_TYPE = OffersSortType.Popular;
