import {AppRoute} from 'settings/app-route';
import {AuthorizationStatus} from 'settings/authorization-status';
import {
  getAuthorizationStatus,
  getUser
} from 'store/user/selector';
import {Link} from 'react-router-dom';
import {useAppSelector} from 'hooks/use-redux-hooks';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  const isAuthorisedUser = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuthorisedUser ? AppRoute.Favorites : AppRoute.Login}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {isAuthorisedUser && <span className="header__user-name user__name">{user.email}</span>}
                  {!isAuthorisedUser && <span className="header__login">Sign in</span>}
                </Link>
              </li>
              {isAuthorisedUser &&
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Logout}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export {Header};
