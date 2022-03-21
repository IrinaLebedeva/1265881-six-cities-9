import {AppRoute} from 'settings/app-route';
import {getAuthorizationStatus} from 'store/user/selector';
import {Link} from 'react-router-dom';
import {useAppSelector} from 'hooks/use-redux-hooks';
import {AuthorizationStatus} from 'settings/authorization-status';
import {AuthorizedUserNavList} from 'components/header/authorized-user-nav-list';
import {UnauthorizedUserNavList} from 'components/header/unauthorized-user-nav-list';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const userNavList = authorizationStatus !== AuthorizationStatus.Auth ?
    <UnauthorizedUserNavList/> :
    <AuthorizedUserNavList/>;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {userNavList}
        </div>
      </div>
    </header>
  );
}

export {Header};
