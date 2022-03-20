import {AppRoute} from 'settings/app-route';
import {Link} from 'react-router-dom';
import {logoutUser} from 'store/user/api-action';
import {
  useAppDispatch,
  useAppSelector
} from 'hooks/use-redux-hooks';

export function AuthorizedUserNavList(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer.user);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img src={user.avatarUrl} alt=''/>
            </div>
            <span className="header__user-name user__name">{user.email}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to={AppRoute.Root} onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutUser());
          }}
          >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
