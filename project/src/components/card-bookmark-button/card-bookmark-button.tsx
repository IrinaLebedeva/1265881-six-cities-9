import {AppRoute} from 'settings/app-route';
import clsx from 'clsx';
import {getIsUserAuthorized} from 'store/user/selector';
import {
  memo,
  MouseEvent,
  useCallback,
  useRef
} from 'react';
import {Offer} from 'types/offer';
import {toggleFavoriteOfferStatus} from 'store/favorite-offers/api-action';
import {
  useAppDispatch,
  useAppSelector
} from 'hooks/use-redux-hooks';
import {useNavigate} from 'react-router-dom';

enum CardCssClassByType {
  Default = 'place-card__bookmark',
  Property = 'property__bookmark',
}

type cardTypes = keyof typeof CardCssClassByType;

interface CardBookmarkButtonProps {
  offer: Offer,
  cardType?: cardTypes,
  iconSize?: {
    width: number,
    height: number,
  },
}

function CardBookmarkButton(
  {
    offer,
    cardType = 'Default' as cardTypes,
    iconSize = {width: 18, height: 19},
  }: CardBookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isUserAuthorized = useAppSelector(getIsUserAuthorized);
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const cssClassByType = CardCssClassByType[cardType];
  const cssClassNameFavorite = `${cssClassByType}-button--active`;

  const handleButtonClick = useCallback((evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (!isUserAuthorized) {
      navigate(AppRoute.Login);
    }
    if (buttonRef.current) {
      dispatch(toggleFavoriteOfferStatus(offer.id));
      buttonRef.current.classList.toggle(cssClassNameFavorite);
    }

  }, [cssClassNameFavorite, dispatch, isUserAuthorized, navigate, offer]);

  return (
    <button
      className={clsx(
        `${cssClassByType}-button`,
        offer.isFavorite && cssClassNameFavorite,
        'button',
      )}
      type="button"
      onClick={handleButtonClick}
      ref={buttonRef}
    >
      <svg className={`${cssClassByType}-icon`} width={iconSize.width} height={iconSize.height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default memo(CardBookmarkButton);
