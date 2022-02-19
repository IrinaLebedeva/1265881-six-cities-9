enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  NotFound = '/404',
  Property = '/offer',
  Root = '/',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
  Unknown = 'UNKNOWN',
}

export {
  AppRoute,
  AuthorizationStatus
};
