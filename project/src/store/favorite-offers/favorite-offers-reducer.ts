import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {Offers} from 'types/offer';
import {NameSpace} from 'settings/name-space';

type InitialState = {
  favoriteOffers: Offers;
  isFavoriteOffersDataLoaded: boolean;
}

const initialState: InitialState = {
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
