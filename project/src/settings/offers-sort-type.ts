export enum OffersSortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum OfferSortCode {
  Popular = 'Popular',
  PriceLowToHigh = 'PriceLowToHigh',
  PriceHighToLow = 'PriceHighToLow',
  TopRatedFirst = 'TopRatedFirst',
}

export const offersSortTypes = Object.keys(OffersSortType);

export const DEFAULT_OFFERS_SORT_TYPE = OffersSortType.Popular;
