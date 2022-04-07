import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {FavoritesCard} from './favorites-card';
import {HistoryRouteContainer} from 'components/history-route-container/history-route-container';
import {makeFakeOffer} from 'utils/mocks/make-fake-offer';
import {NameSpace} from 'settings/name-space';
import {Provider} from 'react-redux';
import {
  render,
  screen
} from '@testing-library/react';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const mockOffer = makeFakeOffer();
const store = mockStore({
  [NameSpace.User]: {},
});

describe('Component: FavoritesCard', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouteContainer history={history}>
          <FavoritesCard offer={mockOffer}/>
        </HistoryRouteContainer>
      </Provider>
      );

    expect(screen.getByTestId('favorites-place-card')).toBeInTheDocument();
  });
});
