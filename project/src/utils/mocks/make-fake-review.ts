import {
  datatype,
  date,
  lorem
} from 'faker';
import {makeFakeUser} from './make-fake-user';
import {Review, Reviews} from 'types/review';

enum FakeConstants {
  CommentSentenceNumber = 5,
  ReviewsNumber = 3,
}

export const makeFakeReview = ():Review => (
  {
    comment: lorem.paragraph(FakeConstants.CommentSentenceNumber),
    date: `${date.past()}`,
    id: datatype.number(),
    rating: datatype.number(),
    user: makeFakeUser(),
  }
);

export const makeFakeReviews = ():Reviews => Array.from(
  Array(FakeConstants.ReviewsNumber),
  () => makeFakeReview(),
);
