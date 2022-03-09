import {AppRoute} from 'settings/app-route';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import {resetCityCode} from 'store/action';
import {useAppDispatch} from 'hooks/use-redux-hooks';

type FooterProps = {
  additionalClassName ?: string;
}

function Footer({additionalClassName}: FooterProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <footer className={clsx('footer', additionalClassName)}>
      <Link className="footer__logo-link" to={AppRoute.Root} onClick={() => dispatch(resetCityCode())}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  );
}

export {Footer};
