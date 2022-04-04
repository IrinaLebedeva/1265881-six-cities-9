import {State} from 'types/state';
import {NameSpace} from 'settings/name-space';

export const getFavoriteOffers = (state: State) => state[NameSpace.FavoriteOffers].favoriteOffers;

export const getIsFavoriteOffersDataLoaded = (state: State) => state[NameSpace.FavoriteOffers].isFavoriteOffersDataLoaded;
