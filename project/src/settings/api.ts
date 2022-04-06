export enum Api {
  BackendUrl = 'https://9.react.pages.academy/six-cities',
  TimeoutInMilliseconds = 5000,
  TokenName = 'six-cities-api-token',
}

export enum ApiRoute {
  GetOffers = '/hotels',
  GetOfferById = '/hotels/:offerId',
  Login = '/login',
  Logout = '/logout',
  OfferReviews = '/comments/:offerId',
  GetOfferNearbyOffers = '/hotels/:offerId/nearby',
  FavoriteOffers = '/favorite',
}
