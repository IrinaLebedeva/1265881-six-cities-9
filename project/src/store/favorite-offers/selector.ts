import {State} from 'types/state';

export const getFavoriteOffers = (state: State) => state.favoriteOffersReducer.favoriteOffers;

export const getIsFavoriteOffersDataLoaded = (state: State) => state.favoriteOffersReducer.isFavoriteOffersDataLoaded;
