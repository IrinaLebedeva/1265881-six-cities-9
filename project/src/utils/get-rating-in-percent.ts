import {RatingMaxValue} from 'settings/const';

export const getRatingInPercent = (rating: number) => Math.ceil(rating * RatingMaxValue.InPercents / RatingMaxValue.InPoints);
