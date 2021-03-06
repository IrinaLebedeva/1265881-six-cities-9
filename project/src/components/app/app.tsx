import {AppRoute} from 'settings/app-route';
import {AuthorizationStatus} from 'settings/authorization-status';
import {
  generatePath,
  Route,
  Routes,
  useLocation,
  useMatch,
  useNavigate
} from 'react-router-dom';
import {cityCodes} from 'settings/city';
import {CityCode} from 'types/city-code';
import {CityScreen} from 'components/city-screen/city-screen';
import {DataLoadedStatus} from 'settings/data-loaded-status';
import {ErrorPageScreen} from 'components/error-page-screen/error-page-screen';
import {FavoritesScreen} from 'components/favorites-screen/favorites-screen';
import {formatCityCode} from 'utils/format-city-code';
import {getAuthorizationStatus} from 'store/user/selector';
import {getDataLoadedStatus} from 'store/offers/selector';
import {Layout} from 'components/layout/layout';
import {LoadingScreen} from 'components/loading-screen/loading-screen';
import {LoginScreen} from 'components/login-screen/login-screen';
import {logoutUser} from 'store/user/api-action';
import {NotFoundScreen} from 'components/not-found-screen/not-found-screen';
import {PropertyScreen} from 'components/property-screen/property-screen';
import {PrivateRoute} from 'components/private-route/private-route';
import {
  resetCityCode,
  setCityCode
} from 'store/city/city-reducer';
import {
  useAppDispatch,
  useAppSelector
} from 'hooks/use-redux-hooks';
import {useEffect} from 'react';


function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dataLoadedStatus = useAppSelector(getDataLoadedStatus);

  const dispatch = useAppDispatch();
  const location = useLocation();
  const matchCityRoute = useMatch(AppRoute.City);
  const navigate = useNavigate();

  useEffect(() => {
    switch (location.pathname) {
      case AppRoute.Root:
        dispatch(resetCityCode());
        break;
      case AppRoute.Logout:
        dispatch(logoutUser());
        navigate(AppRoute.Root);
        break;
    }
    if (matchCityRoute?.params?.cityCode) {
      dispatch(setCityCode(formatCityCode(matchCityRoute.params.cityCode) as CityCode));
    }
  });

  if (
    authorizationStatus === AuthorizationStatus.Unknown ||
    dataLoadedStatus === DataLoadedStatus.InProcess
  ) {
    return (
      <LoadingScreen />
    );
  }

  if (dataLoadedStatus === DataLoadedStatus.Error) {
    return (
      <ErrorPageScreen title="An error occurred while loading data. Please try to visit us later." />
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
          path={AppRoute.Property}
          element={<PropertyScreen/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen />
            </PrivateRoute>
          }
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
