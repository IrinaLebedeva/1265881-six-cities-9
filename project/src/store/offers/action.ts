import {createAction} from '@reduxjs/toolkit';
import {OffersSortTypeKey} from 'types/offers-sort-type-key';

export const setOffers = createAction('offers/setOffers');

export const setOffersSortType = createAction<{offersSortType: OffersSortTypeKey}>('offers/setOffersSortType');
