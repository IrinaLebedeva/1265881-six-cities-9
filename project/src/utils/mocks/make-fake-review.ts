import {
  datatype,
  date,
  lorem
} from 'faker';
import {makeFakeUser} from './make-fake-user';

enum FakeConstants {
  CommentSentenceNumber = 5,
  ReviewsNumber = 3,
}

export const makeFakeReview = () => (
  {
    comment: lorem.paragraph(FakeConstants.CommentSentenceNumber),
    date: date.past(),
    id: datatype.number(),
    rating: datatype.number(),
    user: makeFakeUser(),
  }
);

export const makeFakeReviews = () => Array.from(
  Array(FakeConstants.ReviewsNumber),
  () => makeFakeReview(),
);
