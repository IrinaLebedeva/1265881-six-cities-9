import {Offer} from 'types/offer';

const sortOffersByPriceDesc = (firstOffer: Offer, secondOffer: Offer): number => {
  if (firstOffer.price > secondOffer.price) {
    return -1;
  }
  if (firstOffer.price < secondOffer.price) {
    return 1;
  }
  return 0;
};

const sortOffersByPriceAsc = (firstOffer: Offer, secondOffer: Offer): number => {
  if (firstOffer.price > secondOffer.price) {
    return 1;
  }
  if (firstOffer.price < secondOffer.price) {
    return -1;
  }
  return 0;
};

const sortOffersByRatingDesc = (firstOffer: Offer, secondOffer: Offer): number => {
  if (firstOffer.rating > secondOffer.rating) {
    return -1;
  }
  if (firstOffer.rating < secondOffer.rating) {
    return 1;
  }
  return 0;
};

export {
  sortOffersByPriceDesc,
  sortOffersByPriceAsc,
  sortOffersByRatingDesc
};
