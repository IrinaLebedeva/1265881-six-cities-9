import {CityScreen} from '../city-screen/city-screen';

type AppScreenProps = {
  cityPlacesCount: number;
}

function App({cityPlacesCount}: AppScreenProps): JSX.Element {
  return (
    <CityScreen cityPlacesCount={cityPlacesCount} />
  );
}

export default App;
