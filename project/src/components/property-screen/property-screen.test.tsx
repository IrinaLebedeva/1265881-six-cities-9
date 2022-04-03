import {AuthorizationStatus} from 'settings/authorization-status';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {HistoryRouteContainer} from 'components/history-route-container/history-route-container';
import {
  makeFakeNearbyOffers,
  makeFakeOffer
} from 'utils/mocks/make-fake-offer';
import {makeFakeReviews} from 'utils/mocks/make-fake-review';
import {makeFakeUser} from 'utils/mocks/make-fake-user';
import {NewReviewSendStatus} from 'settings/new-review-send-status';
import {Provider} from 'react-redux';
import {PropertyScreen} from './property-screen';
import {
  render,
  screen
} from '@testing-library/react';
import {StoreNamespace} from 'settings/store-namespace';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  [StoreNamespace.Offer]: {
    offer: makeFakeOffer(),
    reviews: makeFakeReviews(),
    nearbyOffers: makeFakeNearbyOffers(),
    newReviewSendStatus: NewReviewSendStatus.NotSend
  },
  [StoreNamespace.User]: {
    authorizationStatus: AuthorizationStatus.Auth,
    errorMessage: '',
    user: makeFakeUser(),
  },
});

const fakePropertyScreen = (
  <Provider store={store}>
    <HistoryRouteContainer history={history}>
      <PropertyScreen/>
    </HistoryRouteContainer>
  </Provider>
);

describe('Component: PropertyScreen', () => {
  it(`should render Room Page`, () => {
    render(fakePropertyScreen);

    expect(screen.getByTestId('property-container')).toBeInTheDocument();
  });
});
