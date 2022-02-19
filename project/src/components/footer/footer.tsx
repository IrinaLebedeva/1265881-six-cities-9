import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

type FooterProps = {
  additionalClassName ?: string;
}

function Footer({additionalClassName = ''}: FooterProps): JSX.Element {
  return (
    <footer className={`footer ${additionalClassName}`}>
      <Link className="footer__logo-link" to={AppRoute.Root}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  );
}

export {Footer};
