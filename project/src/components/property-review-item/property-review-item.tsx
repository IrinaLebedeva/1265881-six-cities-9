import dayjs from 'dayjs';
import {getRatingInPercent} from 'utils/get-rating-in-percent';
import {Review} from 'types/review';

const DISPLAY_DATE_FORMAT = 'MMMM YYYY';
const MARKUP_DATE_FORMAT = 'YYYY-MM-DD';

type PropertyReviewItemProps = {
  review: Review;
}

function PropertyReviewItem({review}: PropertyReviewItemProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
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
            <span style={{width: `${getRatingInPercent(review.rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(review.date).format(MARKUP_DATE_FORMAT)}>
          {dayjs(review.date).format(DISPLAY_DATE_FORMAT)}
        </time>
      </div>
    </li>
  );
}

export {PropertyReviewItem};
