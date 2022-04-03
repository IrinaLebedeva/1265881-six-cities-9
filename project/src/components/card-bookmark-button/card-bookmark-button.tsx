import {AppRoute} from 'settings/app-route';
import clsx from 'clsx';
import {getIsUserAuthorized} from 'store/user/selector';
import {
  memo,
  MouseEvent,
  useCallback
} from 'react';
import {Offer} from 'types/offer';
import {setFavoriteOfferStatus} from 'store/favorite-offers/api-action';
import {
  useAppDispatch,
  useAppSelector
} from 'hooks/use-redux-hooks';
import {useNavigate} from 'react-router-dom';

interface CardBookmarkButtonProps {
  offer: Offer,
  cssElement?: string,
  iconSize?: {
    width: number,
    height: number,
  },
}

function CardBookmarkButton({offer, cssElement = 'place-card', iconSize = {width: 18, height: 19}}: CardBookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isUserAuthorized = useAppSelector(getIsUserAuthorized);
  const navigate = useNavigate();

  const handleButtonClick = useCallback((evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (!isUserAuthorized) {
      navigate(AppRoute.Login);
    }

    dispatch(setFavoriteOfferStatus({
      offerId: offer.id,
      status: offer.isFavorite ? 0 : 1,
    }));
  }, [dispatch, isUserAuthorized, navigate, offer]);

  return (
    <button
      className={clsx(`${cssElement}__bookmark-button`, offer.isFavorite && `${cssElement}__bookmark-button--active`, 'button')}
      type="button"
      onClick={handleButtonClick}
    >
      <svg className={`${cssElement}__bookmark-icon`} width={iconSize.width} height={iconSize.height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default memo(CardBookmarkButton);
