import {RatingMaxValue} from 'settings/const';

export const getRatingInPercent = (rating: number): string => `${Math.round(rating) * RatingMaxValue.InPercents / RatingMaxValue.InPoints}%`;
