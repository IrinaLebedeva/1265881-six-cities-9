import {createReducer} from '@reduxjs/toolkit';
import {Offers} from 'types/offer';
import {setFavoriteOffers} from 'store/favorite-offers/action';

type InitialState = {
  favoriteOffers: Offers;
  isFavoriteOffersDataLoaded: boolean;
}

const initialState: InitialState = {
  favoriteOffers: [],
  isFavoriteOffersDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
      state.isFavoriteOffersDataLoaded = true;
    });
});

export {reducer as favoriteOffersReducer};
