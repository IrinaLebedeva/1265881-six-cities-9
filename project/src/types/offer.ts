import {City} from 'types/city';
import {Host} from 'types/host';
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
  host: Host;
  maxAdults: number;
  location: Location;
  id: number;
  isPremium: boolean;
  previewImage: string;
  isFavorite: boolean;
};

export type Offers = Offer[];
