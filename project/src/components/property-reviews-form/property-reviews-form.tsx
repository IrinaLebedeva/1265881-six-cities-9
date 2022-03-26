import {getNewReviewSendStatus} from 'store/offer/selector';
import {NewReviewSendStatus} from 'settings/new-review-send-status';
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState
} from 'react';
import {setNewReviewSendStatus} from 'store/offer/action';
import {
  getOfferReviews,
  setOfferReview
} from 'store/offer/api-action';
import {
  useAppDispatch,
  useAppSelector
} from 'hooks/use-redux-hooks';

enum ReviewRestriction {
  RatingMinValue = 1,
  CommentMinLength = 50,
  CommentMaxLength = 300,
}

type PropertyReviewsFormProps = {
  offerId: number;
}

function PropertyReviewsForm({offerId}: PropertyReviewsFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const formRef = useRef<HTMLFormElement | null>(null);
  const newReviewSendStatus = useAppSelector(getNewReviewSendStatus);

  useEffect(() => {
    switch (newReviewSendStatus) {
      case NewReviewSendStatus.InProcess:
        setFormIsActive(false);
        break;
      case NewReviewSendStatus.Success:
        setFormIsActive(true);
        resetForm();
        dispatch(setNewReviewSendStatus(NewReviewSendStatus.NotSend));
        dispatch(getOfferReviews(offerId));
        break;
      case NewReviewSendStatus.Error:
        setFormIsActive(true);
        dispatch(setNewReviewSendStatus(NewReviewSendStatus.NotSend));
        break;
    }
  }, [newReviewSendStatus, dispatch, offerId]);

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
      setRating(0);
      setReview('');
    }
  };

  const setFormIsActive = (isActive: boolean) => {
    if (formRef.current) {
      formRef.current.querySelectorAll('input, textarea, button').forEach(
        (element) => {
          (isActive) ?
            element.removeAttribute('disabled') :
            element.setAttribute('disabled', 'disabled');
        });
    }
  };

  const isValidRating = () => rating >= ReviewRestriction.RatingMinValue;

  const isValidComment = () => (
    review.length >= ReviewRestriction.CommentMinLength &&
    review.length <= ReviewRestriction.CommentMaxLength
  );

  const isValid = isValidRating() && isValidComment();

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const handleReviewFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(setNewReviewSendStatus(NewReviewSendStatus.InProcess));
    dispatch(setOfferReview({
      offerId,
      comment: review,
      rating,
    }));
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
        onChange={handleRatingChange}
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
      onSubmit={handleReviewFormSubmit}
      ref={formRef}
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
        onChange={handleReviewChange}
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
