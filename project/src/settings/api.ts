export enum Api {
  BackendUrl = 'https://9.react.pages.academy/six-cities',
  TimeoutInMilliseconds = 5000,
  TokenName = 'six-cities-api-token',
}

export enum ApiRoute {
  GetOffers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  GetOffer = '/hotels/',
  GetOfferReviews = '/comments/',
  SetOfferReview = '/comments/',
  GetOfferNearbyOffers = '/hotels/{offerId}/nearby',
}
