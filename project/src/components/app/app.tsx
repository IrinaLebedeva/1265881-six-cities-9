import {AppRoute} from 'settings/app-route';
import {AuthorizationStatus} from 'settings/authorization-status';
import {
  generatePath,
  Route,
  Routes,
  useLocation,
  useMatch
} from 'react-router-dom';
import {cityCodes} from 'settings/city';
import {CityCode} from 'types/city-code';
import {CityScreen} from 'components/city-screen/city-screen';
import {FavoritesEmptyScreen} from 'components/favorites-empty-screen/favorites-empty-screen';
import {FavoritesScreen} from 'components/favorites-screen/favorites-screen';
import {formatCityCode} from 'utils/format-city-code';
import {Layout} from 'components/layout/layout';
import {LoadingScreen} from 'components/loading-screen/loading-screen';
import {LoginScreen} from 'components/login-screen/login-screen';
import {NotFoundScreen} from 'components/not-found-screen/not-found-screen';
import {Offers} from 'types/offer';
import {PropertyScreen} from 'components/property-screen/property-screen';
import {PrivateRoute} from 'components/private-route/private-route';
import {
  resetCityCode,
  setCityCode
} from 'store/city/action';
import {
  useAppDispatch,
  useAppSelector
} from 'hooks/use-redux-hooks';
import {useEffect} from 'react';

type AppScreenProps = {
  favoriteOffers: Offers;
};

function App({favoriteOffers}: AppScreenProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.userReducer.authorizationStatus);
  const isOffersLoaded = useAppSelector((state) => state.offersReducer.isOffersLoaded);
  const offers = useAppSelector((state) => state.offersReducer.offers);

  const location = useLocation();
  const dispatch = useAppDispatch();
  const matchCityRoute = useMatch(AppRoute.City);

  useEffect(() => {
    if (location.pathname === AppRoute.Root) {
      dispatch(resetCityCode());
    }
    if (matchCityRoute && matchCityRoute.params.cityCode) {
      dispatch(setCityCode({cityCode: formatCityCode(matchCityRoute.params.cityCode) as CityCode}));
    }
  });

  if (authorizationStatus === AuthorizationStatus.Unknown || !isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const cityRoutes = cityCodes.map((routeCityCode) => (
    <Route
      path={generatePath(AppRoute.City, {cityCode: routeCityCode})}
      element={<CityScreen/>}
      key={`route${routeCityCode}`}
    />
  ));

  return (
    <Routes>
      <Route path={AppRoute.Root} element={<Layout />}>
        <Route path={AppRoute.Root}>
          <Route
            index
            element={<CityScreen/>}
          />
          {cityRoutes}
        </Route>
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={`${AppRoute.Property}`}
          element={<PropertyScreen offers={offers}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen offers={favoriteOffers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.FavoritesEmpty}
          element={<FavoritesEmptyScreen />}
        />
      </Route>
      <Route
        path="*"
        element={<NotFoundScreen />}
      />
    </Routes>
  );
}

export default App;
