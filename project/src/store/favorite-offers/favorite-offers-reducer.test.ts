import {favoriteOffersReducer} from './favorite-offers-reducer';

describe('favoriteOffersReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(favoriteOffersReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        favoriteOffers: [],
        isFavoriteOffersDataLoaded: false,
      })
  })

});
