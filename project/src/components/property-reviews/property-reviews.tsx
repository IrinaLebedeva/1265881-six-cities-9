import dayjs from 'dayjs';
import {PropertyReviewsForm} from 'components/property-reviews-form/property-reviews-form';
import {Review, Reviews} from 'types/review';
import {PropertyReviewItem} from 'components/property-review-item/property-review-item';
import {useMemo} from 'react';

const REVIEWS_MAX_COUNT = 10;

const sortReviewsByDateDesc = (a: Review, b: Review): number => {
  const diffInMilliseconds = dayjs(a.date).diff(dayjs(b.date));
  if (diffInMilliseconds > 0) {
    return -1;
  }
  if (diffInMilliseconds < 0) {
    return 1;
  }
  return 0;
};

type PropertyReviewsProps = {
  reviews: Reviews;
  reviewsForm: JSX.Element | null;
}

function PropertyReviews({reviews, reviewsForm}: PropertyReviewsProps): JSX.Element {
  const sortedReviews = useMemo(() => reviews.slice().sort(sortReviewsByDateDesc), [reviews]);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.slice(0, REVIEWS_MAX_COUNT).map((review) => (
          <li className="reviews__item" key={review.id}>
            <PropertyReviewItem review={review} />
          </li>
        ))}
      </ul>
      {reviewsForm}
    </section>
  );
}

export {PropertyReviews};
