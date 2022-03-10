import clsx from 'clsx';
import {
  OffersSortType,
  offersSortTypes
} from 'settings/offers-sort-type';
import {OffersSortTypeKey} from 'types/offers-sort-type-key';
import {useState} from 'react';

type CallbackType = (offerId: OffersSortTypeKey) => void;

type PlacesSortingProps = {
  sortType: OffersSortTypeKey;
  setSortTypeCallback: CallbackType;
}

function PlacesSorting({sortType, setSortTypeCallback}: PlacesSortingProps): JSX.Element {
  const [isSortOpened, setIsSortOpened] = useState<boolean>(false);

  const handleSortChange = (offersSortType: OffersSortTypeKey) => {
    setSortTypeCallback(offersSortType);
    setIsSortOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsSortOpened(!isSortOpened)}>
        {OffersSortType[sortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={clsx('places__options', 'places__options--custom', {'places__options--opened': isSortOpened})}>
        {offersSortTypes.map((offersSortType) => (
          <li
            className={clsx('places__option', {'places__option--active' : offersSortType === sortType})}
            tabIndex={0}
            onClick={() => handleSortChange(offersSortType as OffersSortTypeKey)}
            key={offersSortType}
          >
            {OffersSortType[offersSortType as OffersSortTypeKey]}
          </li>
        ))}
      </ul>
    </form>
  );
}

export {PlacesSorting};
