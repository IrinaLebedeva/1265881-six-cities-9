import {AppRoute} from 'settings/app-route';
import {Link} from 'react-router-dom';
import {User} from 'types/user';

type NavigationMenuProps = {
  user: User;
  isAuthorizedUser: boolean;
}

function NavigationMenu({user, isAuthorizedUser}: NavigationMenuProps): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={isAuthorizedUser ? AppRoute.Favorites : AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {
              isAuthorizedUser ?
                <span className="header__user-name user__name">{user.email}</span> :
                <span className="header__login">Sign in</span>
            }
          </Link>
        </li>
        {
          isAuthorizedUser &&
            <li className="header__nav-item">
              <Link className="header__nav-link" to={AppRoute.Logout}>
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
        }
      </ul>
    </nav>
  );
}

export {NavigationMenu};
