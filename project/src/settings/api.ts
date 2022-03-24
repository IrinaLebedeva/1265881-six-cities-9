export enum Api {
  BackendUrl = 'https://9.react.pages.academy/six-cities',
  TimeoutInMilliseconds = 5000,
  TokenName = 'six-cities-api-token',
  TokenRequestName = 'x-token',
}

export enum ApiRoute {
  GetOffers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  GetOffer = '/hotels/{offerId}',
  GetOfferReviews = '/comments/{offerId}',
  GetOfferNearbyOffers = '/hotels/{offerId}/nearby',
}
