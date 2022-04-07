import {AuthorizationStatus} from 'settings/authorization-status';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {HistoryRouteContainer} from 'components/history-route-container/history-route-container';
import {makeFakeUser} from 'utils/mocks/make-fake-user';
import {NameSpace} from 'settings/name-space';
import {render as testRender} from '@testing-library/react';
import {Provider} from 'react-redux';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Auth,
    errorMessage: '',
    user: makeFakeUser(),
  },
});

const Wrapper: React.FC = ({children}) => (
  <Provider store={store}>
    <HistoryRouteContainer history={history}>
      {children}
    </HistoryRouteContainer>
  </Provider>
);

const testRenderWrapper = (component: React.ReactElement, params = {}) => testRender(component, {
  wrapper: Wrapper, ...params
});

export {testRenderWrapper};
