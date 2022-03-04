import {
  RATING_IN_PERCENTS_MAX_VALUE,
  RATING_IN_POINTS_MAX_VALUE
} from 'settings/const';

export const getRatingInPercent = (rating: number) => Math.ceil(rating * RATING_IN_PERCENTS_MAX_VALUE / RATING_IN_POINTS_MAX_VALUE);
