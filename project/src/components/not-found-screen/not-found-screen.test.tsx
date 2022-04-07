import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {HistoryRouteContainer} from 'components/history-route-container/history-route-container';
import {NotFoundScreen} from './not-found-screen';
import {NameSpace} from 'settings/name-space';
import {Provider} from 'react-redux';
import {
  render,
  screen
} from '@testing-library/react';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  [NameSpace.User]: {},
});

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouteContainer history={history}>
          <NotFoundScreen/>
        </HistoryRouteContainer>
      </Provider>,
    );

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByTestId('link-app-route-root')).toBeInTheDocument();
  });
});
