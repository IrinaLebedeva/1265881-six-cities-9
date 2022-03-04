import React, {
  ChangeEvent,
  FormEvent,
  useState
} from 'react';

const VALID_RATING_MIN_VALUE = 1;
const VALID_REVIEW_MIN_LENGTH = 5;

function PropertyReviewsForm(): JSX.Element {
  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [isValid, setValid] = useState<boolean>(false);
  const formReviewData = {review, rating};

  const isValidFormReviewData = (): boolean => {
    if (rating >= VALID_RATING_MIN_VALUE && review.length >= VALID_REVIEW_MIN_LENGTH) {
      return true;
    }
    return false;
  };

  const onReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
    setValid(isValidFormReviewData);
  };

  const onRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
    setValid(isValidFormReviewData);
  };

  const submitFormReviewHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log(formReviewData);
  };

  const appRatingValues = [
    {
      value: '5',
      name: 'perfect',
    },
    {
      value: '4',
      name: 'good',
    },
    {
      value: '3',
      name: 'not bad',
    },
    {
      value: '2',
      name: 'badly',
    },
    {
      value: '1',
      name: 'terribly',
    },
  ];

  const ratingElement: JSX.Element[] = appRatingValues.map((appRating) => (
    <React.Fragment key={`${appRating.value}-rating`}>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={appRating.value}
        id={`${appRating.value}-stars`}
        type="radio"
        onChange={onRatingChange}
      />
      <label htmlFor={`${appRating.value}-stars`} className="reviews__rating-label form__rating-label" title={appRating.name}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  ));

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={submitFormReviewHandler}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingElement}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
}

export {PropertyReviewsForm};
