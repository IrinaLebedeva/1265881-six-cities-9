import {
  FavoriteOffersInitialState,
  favoriteOffersReducer,
  setFavoriteOffers
} from './favorite-offers-reducer';
import {makeFakeOffers} from 'utils/mocks/make-fake-offer';

const fakeFavoriteOffersInitialState: FavoriteOffersInitialState = {
  favoriteOffers: [],
  isFavoriteOffersDataLoaded: false,
};

const fakeFavoriteOffers = makeFakeOffers();

describe('favoriteOffersReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(favoriteOffersReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(fakeFavoriteOffersInitialState);
  });

  it('should set favorite offers', () => {
    expect(favoriteOffersReducer.reducer(
      fakeFavoriteOffersInitialState,
      setFavoriteOffers(fakeFavoriteOffers),
    ))
      .toEqual({
        favoriteOffers: fakeFavoriteOffers,
        isFavoriteOffersDataLoaded: true,
      });
  });

});
