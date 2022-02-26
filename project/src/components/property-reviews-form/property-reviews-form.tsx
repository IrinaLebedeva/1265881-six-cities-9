import {ChangeEvent, FormEvent, useState} from 'react';

function PropertyReviewsForm(): JSX.Element {
  const [formReviewData, setFormReviewData] = useState({
    rating: 0,
    review: '',
  });

  const submitFormReviewHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log(formReviewData);
  };

  const fieldChangeHandler = (evt: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormReviewData({
      ...formReviewData,
      [name]: value,
    });
  };

  const ratingValues = [
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

  const ratingElement: JSX.Element[] = [];
  ratingValues.map((rating) => {
    ratingElement.push(
      <>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={rating.value}
          id={`${rating.value}-stars`}
          type="radio"
          onChange={fieldChangeHandler}
        />
        <label htmlFor={`${rating.value}-stars`} className="reviews__rating-label form__rating-label" title={rating.name}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </>,
    );
  });

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
        onChange={fieldChangeHandler}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export {PropertyReviewsForm};
