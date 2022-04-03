import clsx from 'clsx';
import {getOffersSortType} from 'store/offers/selector';
import {
  OffersSortType,
  offersSortTypes
} from 'settings/offers-sort-type';
import {OffersSortTypeKey} from 'types/offers-sort-type-key';
import {setOffersSortType} from 'store/offers/offers-reducer';
import {useState} from 'react';
import {
  useAppDispatch,
  useAppSelector
} from 'hooks/use-redux-hooks';

function PlacesSorting(): JSX.Element {
  const [isSortOpened, setIsSortOpened] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const sortType = useAppSelector(getOffersSortType);

  const handleSortChange = (offersSortType: OffersSortTypeKey) => {
    dispatch(setOffersSortType(offersSortType));
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
