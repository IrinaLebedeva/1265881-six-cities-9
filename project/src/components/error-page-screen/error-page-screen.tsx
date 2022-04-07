import {Header} from 'components/header/header';

import './css/cities.css';

interface ErrorPageScreenProps {
  title: string,
  description?: string,
}

function ErrorPageScreen({title, description}: ErrorPageScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header showNavigation={false}/>
      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper cities__status-wrapper--without-icon tabs__content">
                <b className="cities__status">{title}</b>
                {
                  description &&
                  <p className="cities__status-description">{description}</p>
                }
              </div>
            </section>
            <div className="cities__right-section">
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {ErrorPageScreen};
