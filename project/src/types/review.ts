import {User} from 'types/user';

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

export type NewReview = {
  offerId: number;
  comment: string;
  rating: number;
};

export type Reviews = Review[];
