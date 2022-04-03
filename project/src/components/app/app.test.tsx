import App from './app';
import {AppRoute} from 'settings/app-route';
import {AuthorizationStatus} from 'settings/authorization-status';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {DEFAULT_CITY_CODE} from 'settings/const';
import {DEFAULT_OFFERS_SORT_TYPE} from 'settings/offers-sort-type';
import {HistoryRouteContainer} from 'components/history-route-container/history-route-container';
import {makeFakeOffers} from 'utils/mocks/make-fake-offer';
import {makeFakeUser} from 'utils/mocks/make-fake-user';
import {Provider} from 'react-redux';
import {
  render,
  screen
} from '@testing-library/react';
import {StoreNamespace} from 'settings/store-namespace';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  [StoreNamespace.City]: {
    cityCode: DEFAULT_CITY_CODE,
  },
  [StoreNamespace.Offers]: {
    offers: makeFakeOffers(),
    offersSortType: DEFAULT_OFFERS_SORT_TYPE,
    isOffersLoaded: true,
  },
  [StoreNamespace.User]: {
    authorizationStatus: AuthorizationStatus.Auth,
    errorMessage: '',
    user: makeFakeUser(),
  },
});

const fakeApp = (
  <Provider store={store}>
    <HistoryRouteContainer history={history}>
      <App/>
    </HistoryRouteContainer>
  </Provider>
);

describe('Component: App', () => {
  it(`should render Main Page with number of places found when user navigate to "/"`, () => {
    render(fakeApp);

    history.push(AppRoute.Root);

    expect(screen.getByTestId('city-places-found')).toBeInTheDocument();
  });
});
