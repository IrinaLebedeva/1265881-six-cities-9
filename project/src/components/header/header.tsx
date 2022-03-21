import {AppRoute} from 'settings/app-route';
import {AuthorizationStatus} from 'settings/authorization-status';
import {
  getAuthorizationStatus,
  getUser
} from 'store/user/selector';
import {Link, useLocation} from 'react-router-dom';
import {NavigationMenu} from 'components/header/navigation-menu';
import {useAppSelector} from 'hooks/use-redux-hooks';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const location = useLocation();

  const isAuthorizedUser = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {location.pathname !== AppRoute.Login && <NavigationMenu user={user} isAuthorizedUser={isAuthorizedUser} />}
        </div>
      </div>
    </header>
  );
}

export {Header};
