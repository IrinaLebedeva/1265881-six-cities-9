import {
  datatype,
  internet,
  lorem
} from 'faker';
import {makeFakeCity} from './make-fake-city';
import {makeFakeLocation} from './make-fake-location';
import {makeFakeUser} from './make-fake-user';
import {
  Offer,
  Offers
} from 'types/offer';
import {RatingMaxValue} from 'settings/const';

enum FakeConstants {
  DescriptionSentenceNumber = 3,
  ImagesNumber = 5,
  GoodsNumber = 7,
  OffersNumber = 10,
  NearbyOffersNumber = 3,
  BedroomsMaxNumber = 8,
}

export const makeFakeOffer = ():Offer => (
  {
    images: Array(FakeConstants.ImagesNumber).fill(internet.avatar()),
    city: makeFakeCity(),
    rating: datatype.number(RatingMaxValue.InPoints),
    description: lorem.paragraph(FakeConstants.DescriptionSentenceNumber),
    goods: Array(FakeConstants.GoodsNumber).fill(lorem.word()),
    title: lorem.sentence(),
    type: lorem.word(),
    bedrooms: datatype.number(FakeConstants.BedroomsMaxNumber),
    price: datatype.number(),
    host: makeFakeUser(),
    maxAdults: datatype.number(),
    location: makeFakeLocation(),
    id: datatype.number(),
    isPremium: datatype.boolean(),
    previewImage: internet.avatar(),
    isFavorite: datatype.boolean(),
  }
);

export const makeFakeOffers = ():Offers => Array.from(
  Array(FakeConstants.OffersNumber),
  () => makeFakeOffer(),
);

export const makeFakeNearbyOffers = ():Offers => Array.from(
  Array(FakeConstants.NearbyOffersNumber),
  () => makeFakeOffer(),
);
