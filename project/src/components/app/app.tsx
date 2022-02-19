import {AppRoute} from '../../const';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import {CityScreen} from '../city-screen/city-screen';
import {FavoritesScreen} from '../favorites-screen/favorites-screen';
import {LoginScreen} from '../login-screen/login-screen';
import {NotFoundScreen} from '../not-found-screen/not-found-screen';
import {PropertyScreen} from '../property-screen/property-screen';

type AppScreenProps = {
  cityName: string,
  cityPlacesCount: number,
};

function App({cityName, cityPlacesCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<CityScreen cityName={cityName} cityPlacesCount={cityPlacesCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Property}
          element={<PropertyScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
