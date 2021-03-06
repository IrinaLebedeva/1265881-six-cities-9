import {AppRoute} from 'settings/app-route';
import {Header} from 'components/header/header';
import {Link} from 'react-router-dom';

import './css/image-container.css';

type NotFoundScreenProps = {
  showHeaderNavigation?: boolean;
}

function NotFoundScreen({showHeaderNavigation = true}: NotFoundScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header showNavigation={showHeaderNavigation}/>
      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">404. Page not found</b>
                <p className="cities__status-description"><Link data-testid="link-app-route-root" to={AppRoute.Root}>Back to the Main Page</Link></p>
              </div>
            </section>
            <div className="cities__right-section">
              <div className="cities__image-container image-container">
                <img src="img/not-found.gif" alt="" width="379" height="369"/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {NotFoundScreen};
