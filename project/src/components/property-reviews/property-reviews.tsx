import {Reviews} from 'types/review';
import {PropertyReviewItem} from 'components/property-review-item/property-review-item';

const REVIEWS_MAX_COUNT = 10;

interface PropertyReviewsProps {
  reviews: Reviews,
  reviewsForm?: JSX.Element,
}

function PropertyReviews({reviews, reviewsForm}: PropertyReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.slice(0, REVIEWS_MAX_COUNT).map((review) => (
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
