import {Offer} from 'types/offer';

const sortOffersByPriceHighToLow = (a: Offer, b: Offer): number => {
  if (a.price > b.price) {
    return -1;
  }
  if (a.price < b.price) {
    return 1;
  }
  return 0;
};

const sortOffersByPriceLowToHigh = (a: Offer, b: Offer): number => {
  if (a.price > b.price) {
    return 1;
  }
  if (a.price < b.price) {
    return -1;
  }
  return 0;
};

const sortOffersByTopRatedFirst = (a: Offer, b: Offer): number => {
  if (a.rating > b.rating) {
    return -1;
  }
  if (a.rating < b.rating) {
    return 1;
  }
  return 0;
};

export {
  sortOffersByPriceHighToLow,
  sortOffersByPriceLowToHigh,
  sortOffersByTopRatedFirst
};
