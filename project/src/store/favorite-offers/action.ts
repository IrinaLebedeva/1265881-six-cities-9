import {createAction} from '@reduxjs/toolkit';
import {Offers} from 'types/offer';

export const setFavoriteOffers = createAction<Offers>('favorite-offers/setFavoriteOffers');
