import {dateFormat} from 'utils/date-format';
import {DateFormat} from 'settings/date-format';
import {getRatingInPercent} from 'utils/get-rating-in-percent';
import {Review} from 'types/review';

type PropertyReviewItemProps = {
  review: Review;
}

function PropertyReviewItem({review}: PropertyReviewItemProps): JSX.Element {
  return (
    <>
      <div className="reviews__user user" data-testid="property-review-item">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingInPercent(review.rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={dateFormat(review.date, DateFormat.Markup)}>
          {dateFormat(review.date)}
        </time>
      </div>
    </>
  );
}

export {PropertyReviewItem};
