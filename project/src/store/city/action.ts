import {CityCode} from 'types/city-code';
import {createAction} from '@reduxjs/toolkit';

export const resetCityCode = createAction('city/resetCityCode');

export const setCityCode = createAction<{cityCode: CityCode}>('city/setCityCode');
