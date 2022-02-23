import {AppRoute} from 'settings/app-route';
import clsx from 'clsx';
import {Footer} from 'components/footer/footer';
import {Header} from 'components/header/header';
import {
  Outlet,
  useLocation
} from 'react-router-dom';

function Layout(): JSX.Element {
  const location = useLocation();

  let footerElement;
  if (location.pathname === AppRoute.Favorites || location.pathname === AppRoute.FavoritesEmpty) {
    footerElement = <Footer additionalClassName={location.pathname === AppRoute.Favorites ? 'container' : ''} />;
  }

  return (
    <div className={clsx('page',
      {'page--gray page--main': location.pathname === AppRoute.Root},
      {'page--favorites-empty': location.pathname === AppRoute.FavoritesEmpty},
      {'page--gray page--login': location.pathname === AppRoute.Login})}
    >
      <Header />
      <Outlet />
      {footerElement}
    </div>
  );
}

export {Layout};
