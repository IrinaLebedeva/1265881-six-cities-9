import {RatingMaxValue} from 'settings/const';

export const getRatingInPercent = (rating: number): string => `${Math.ceil(rating * RatingMaxValue.InPercents / RatingMaxValue.InPoints)}%`;
