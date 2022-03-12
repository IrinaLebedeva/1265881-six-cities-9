import {RatingMaxValue} from 'settings/const';

export const getRatingInPercent = (rating: number): number => Math.ceil(rating * RatingMaxValue.InPercents / RatingMaxValue.InPoints);
