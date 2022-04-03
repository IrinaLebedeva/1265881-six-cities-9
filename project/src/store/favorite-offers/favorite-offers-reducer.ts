import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import {Offers} from 'types/offer';
import {StoreNamespace} from 'settings/store-namespace';

type InitialState = {
  favoriteOffers: Offers;
  isFavoriteOffersDataLoaded: boolean;
}

const initialState: InitialState = {
  favoriteOffers: [],
  isFavoriteOffersDataLoaded: false,
};

export const favoriteOffersReducer = createSlice({
  name: StoreNamespace.FavoriteOffers,
  initialState,
  reducers: {
    setFavoriteOffers: (state, action:PayloadAction<Offers>) => {
      state.favoriteOffers = action.payload;
      state.isFavoriteOffersDataLoaded = true;
    },
  },
});

export const {setFavoriteOffers} = favoriteOffersReducer.actions;
