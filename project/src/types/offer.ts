import {City} from 'types/city';
import {User} from 'types/user';
import {Location} from 'types/location';

export type Offer = {
  images: string[];
  city: City;
  rating: number;
  description: string;
  goods: string[];
  title: string;
  type: string;
  bedrooms: number;
  price: number;
  host: User;
  maxAdults: number;
  location: Location;
  id: number;
  isPremium: boolean;
  previewImage: string;
  isFavorite: boolean;
};

export type Offers = Offer[];
