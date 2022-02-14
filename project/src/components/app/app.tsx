import {CityScreen} from '../city-screen/city-screen';

type AppScreenProps = {
  cityName: string,
  cityPlacesCount: number,
};

function App({cityName, cityPlacesCount}: AppScreenProps): JSX.Element {
  return (
    <CityScreen cityName={cityName} cityPlacesCount={cityPlacesCount} />
  );
}

export default App;
