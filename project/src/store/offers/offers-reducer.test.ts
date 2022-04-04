import {
  DEFAULT_OFFERS_SORT_TYPE,
  OfferSortCode
} from 'settings/offers-sort-type';
import {makeFakeOffers} from 'utils/mocks/make-fake-offer';
import {
  offersReducer,
  OffersReducerInitialState,
  setOffers,
  setOffersSortType
} from './offers-reducer';
import {OffersSortTypeKey} from "../../types/offers-sort-type-key";

const fakeOffersInitialState: OffersReducerInitialState = {
  offers: [],
  offersSortType: DEFAULT_OFFERS_SORT_TYPE,
  isOffersLoaded: false,
};

const fakeOffers = makeFakeOffers();

describe('offersReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(fakeOffersInitialState);
  });

  it(`should set offers`, () => {
    expect(offersReducer.reducer(fakeOffersInitialState, setOffers(fakeOffers)))
      .toEqual({
        offers: fakeOffers,
        offersSortType: DEFAULT_OFFERS_SORT_TYPE,
        isOffersLoaded: true,
      });
  });

  it(`should set offers sort type to "${OfferSortCode.PriceHighToLow}"`, () => {
    expect(offersReducer.reducer(
        fakeOffersInitialState,
        setOffersSortType(OfferSortCode.PriceHighToLow as OffersSortTypeKey),
      ))
      .toEqual({
        offers: [],
        offersSortType: OfferSortCode.PriceHighToLow,
        isOffersLoaded: false,
      });
  });

});
