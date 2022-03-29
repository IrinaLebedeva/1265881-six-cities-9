import dayjs from 'dayjs';
import {Review} from 'types/review';

export const sortReviewsByDateDesc = (a: Review, b: Review): number => {
  const diffInMilliseconds = dayjs(a.date).diff(dayjs(b.date));
  if (diffInMilliseconds > 0) {
    return -1;
  }
  if (diffInMilliseconds < 0) {
    return 1;
  }
  return 0;
};
