import {PropertyReviewItem} from 'components/property-review-item/property-review-item';
import {Reviews} from 'types/review';
import {useMemo} from 'react';

const REVIEWS_MAX_COUNT = 10;

interface PropertyReviewsProps {
  reviews: Reviews,
  reviewsForm?: JSX.Element,
}

function PropertyReviews({reviews, reviewsForm}: PropertyReviewsProps): JSX.Element {
  const limitedReviews = useMemo(
    () => reviews.slice(0, REVIEWS_MAX_COUNT),
    [reviews],
  );

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{limitedReviews.length}</span></h2>
      <ul className="reviews__list">
        {limitedReviews.map((review) => (
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
