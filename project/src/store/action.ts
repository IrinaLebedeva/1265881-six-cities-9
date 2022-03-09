import {CityCode} from 'types/city-code';
import {createAction} from '@reduxjs/toolkit';
import {Offers} from 'types/offer';

export const setCityCode = createAction<{cityCode: CityCode}>('city/setCityCode');

export const setOffers = createAction<{offers: Offers}>('offer/setOffers');
