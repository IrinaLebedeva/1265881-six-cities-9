import {AppRoute} from 'settings/app-route';
import {
  getIsUserAuthorized,
  getUser
} from 'store/user/selector';
import {Link} from 'react-router-dom';
import {NavigationMenu} from 'components/header/navigation-menu';
import {useAppSelector} from 'hooks/use-redux-hooks';

type HeaderProps = {
  showNavigation: boolean;
}

function Header({showNavigation}: HeaderProps): JSX.Element {
  const isUserAuthorized = useAppSelector(getIsUserAuthorized);
  const user = useAppSelector(getUser);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {showNavigation && <NavigationMenu user={user} isAuthorizedUser={isUserAuthorized} />}
        </div>
      </div>
    </header>
  );
}

export {Header};
