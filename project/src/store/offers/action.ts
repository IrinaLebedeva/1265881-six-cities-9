import {createAction} from '@reduxjs/toolkit';
import {Offers} from 'types/offer';
import {OffersSortTypeKey} from 'types/offers-sort-type-key';

export const setOffers = createAction<Offers>('offers/setOffers');

export const setOffersSortType = createAction<OffersSortTypeKey>('offers/setOffersSortType');
