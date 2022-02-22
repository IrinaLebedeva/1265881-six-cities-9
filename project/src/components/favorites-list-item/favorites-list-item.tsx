import {FavoritesCard} from 'components/favorites-card/favorites-card';
import {getStringHashCode} from 'utils/get-string-hash-code';

type FavoritesListItemProps = {
  cityCode: string;
  cityName: string;
};

const MOCK_FAVORITES_CARD_COUNT = 2;

function FavoritesListItem({cityCode, cityName}:FavoritesListItemProps): JSX.Element {
  return (
    <>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href={`/${cityCode}`}>
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {Array.from(Array(MOCK_FAVORITES_CARD_COUNT)).map((_, index) => <FavoritesCard id={index + 1} key={getStringHashCode(`${index}${cityCode}`)} />)}
      </div>
    </>
  );
}

export {FavoritesListItem};
