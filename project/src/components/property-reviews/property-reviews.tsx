import dayjs from 'dayjs';
import {PropertyReviewsForm} from 'components/property-reviews-form/property-reviews-form';
import {Review, Reviews} from 'types/review';
import {PropertyReviewItem} from 'components/property-review-item/property-review-item';
import {useMemo} from 'react';

const REVIEWS_MAX_COUNT = 10;

const sortReviews = (a: Review, b: Review): number => {
  const diff = dayjs(a.date).diff(dayjs(b.date));
  if (diff > 0) {
    return -1;
  }
  if (diff < 0) {
    return 1;
  }
  return 0;
};

type PropertyReviewsProps = {
  reviews: Reviews;
}

function PropertyReviews({reviews}: PropertyReviewsProps): JSX.Element {
  const sortedReviews = useMemo(() => reviews.slice().sort(sortReviews), reviews);
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
      <PropertyReviewsForm />
    </section>
  );
}

export {PropertyReviews};
