import {Reviews} from 'types/review';
import {hosts} from 'fixture/hosts';

const reviews: Reviews = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': 'Mon Jun 07 2021 02:35:02 GMT+0300 (Москва, стандартное время)',
    'id': 1,
    'rating': 4,
    'user': hosts[1],
  },
  {
    'comment': 'The building is green and from 18th century.',
    'date': 'Mon Feb 05 2022 02:35:02 GMT+0300 (Москва, стандартное время)',
    'id': 2,
    'rating': 3,
    'user': hosts[0],
  },
  {
    'comment': 'A pretty House, strategically located between Rembrand Square and National Opera.',
    'date': 'Mon Dec 15 2021 02:35:02 GMT+0300 (Москва, стандартное время)',
    'id': 3,
    'rating': 5,
    'user': hosts[1],
  },
];

export {reviews};
