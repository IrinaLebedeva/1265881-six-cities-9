import {State} from 'types/state';
import {StoreNamespace} from 'settings/store-namespace';

export const getFavoriteOffers = (state: State) => state[StoreNamespace.FavoriteOffers].favoriteOffers;

export const getIsFavoriteOffersDataLoaded = (state: State) => state[StoreNamespace.FavoriteOffers].isFavoriteOffersDataLoaded;
