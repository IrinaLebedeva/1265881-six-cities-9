import {AppRoute} from 'settings/app-route';
import {AuthorizationStatus} from 'settings/authorization-status';
import {
  BrowserRouter,
  generatePath,
  Route,
  Routes
} from 'react-router-dom';
import {City} from 'settings/city';
import {CityScreen} from 'components/city-screen/city-screen';
import {FavoritesEmptyScreen} from 'components/favorites-empty-screen/favorites-empty-screen';
import {FavoritesScreen} from 'components/favorites-screen/favorites-screen';
import {Layout} from 'components/layout/layout';
import {LoginScreen} from 'components/login-screen/login-screen';
import {NotFoundScreen} from 'components/not-found-screen/not-found-screen';
import {Offers} from 'types/offer';
import {PropertyScreen} from 'components/property-screen/property-screen';
import {PrivateRoute} from 'components/private-route/private-route';

type AppScreenProps = {
  cityCode: keyof typeof City;
  offers: Offers;
  favoriteOffers: Offers;
};

function App({cityCode, offers, favoriteOffers}: AppScreenProps): JSX.Element {
  const cityRoutes = [];
  for (const routeCityCode in City) {
    cityRoutes.push(
      <Route
        path={generatePath(AppRoute.City, {cityCode: routeCityCode})}
        element={<CityScreen cityCode={cityCode} offers={offers}/>}
        key={`route${cityCode}`}
      />,
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route path={AppRoute.Root}>
            <Route
              index
              element={<CityScreen cityCode={cityCode} offers={offers}/>}
            />
            {cityRoutes}
          </Route>
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={`${AppRoute.Property}`}
            element={<PropertyScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
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
    </BrowserRouter>
  );
}

export default App;
