import {DEFAULT_OFFERS_SORT_TYPE} from 'settings/offers-sort-type';
import {offersReducer} from './offers-reducer';

describe('offersReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offers: [],
        offersSortType: DEFAULT_OFFERS_SORT_TYPE,
        isOffersLoaded: false,
      })
  })

});
