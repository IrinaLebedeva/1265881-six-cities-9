import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {Offers} from 'types/offer';
import {NameSpace} from 'settings/name-space';

export type FavoriteOffersInitialState = {
  favoriteOffers: Offers;
  isFavoriteOffersDataLoaded: boolean;
}

const initialState: FavoriteOffersInitialState = {
  favoriteOffers: [],
  isFavoriteOffersDataLoaded: false,
};

export const favoriteOffersReducer = createSlice({
  name: NameSpace.FavoriteOffers,
  initialState,
  reducers: {
    setFavoriteOffers: (state, action:PayloadAction<Offers>) => {
      state.favoriteOffers = action.payload;
      state.isFavoriteOffersDataLoaded = true;
    },
  },
});

export const {setFavoriteOffers} = favoriteOffersReducer.actions;
