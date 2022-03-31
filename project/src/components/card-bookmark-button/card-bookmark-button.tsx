import {AppRoute} from 'settings/app-route';
import clsx from 'clsx';
import {getIsUserAuthorized} from 'store/user/selector';
import {MouseEvent} from 'react';
import {Offer} from 'types/offer';
import {setFavoriteOfferStatus} from 'store/favorite-offers/api-action';
import {
  useAppDispatch,
  useAppSelector
} from 'hooks/use-redux-hooks';
import {useNavigate} from 'react-router-dom';

type CardBookmarkButtonProps = {
  offer: Offer;
}

function CardBookmarkButton({offer}: CardBookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isUserAuthorized = useAppSelector(getIsUserAuthorized);
  const navigate = useNavigate();

  const handleButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (!isUserAuthorized) {
      navigate(AppRoute.Login);
    }

    dispatch(setFavoriteOfferStatus({
      offerId: offer.id,
      status: +!offer.isFavorite,
    }));
  };

  return (
    <button
      className={clsx('place-card__bookmark-button', {'place-card__bookmark-button--active': offer.isFavorite}, 'button')}
      type="button"
      onClick={handleButtonClick}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export {CardBookmarkButton};
