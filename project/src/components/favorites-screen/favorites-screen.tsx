import {FavoritesListItem} from '../favorites-list-item/favorites-list-item';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';

const mockFavoritesLocations = [
  {
    cityCode: 'amsterdam',
    cityName: 'Amsterdam',
  },
  {
    cityCode: 'cologne',
    cityName: 'Cologne',
  },
];

function FavoritesScreen(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {mockFavoritesLocations.map((location) => (
                <li className="favorites__locations-items" key={location.cityCode}>
                  <FavoritesListItem cityCode={location.cityCode} cityName={location.cityName}/>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer additionalClassName="container" />
    </div>
  );
}

export {FavoritesScreen};
