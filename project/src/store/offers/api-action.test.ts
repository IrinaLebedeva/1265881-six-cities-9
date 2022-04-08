import {Action} from 'redux';
import {ApiRoute} from 'settings/api';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createApi} from 'services/api';
import {getOffers} from './api-action';
import {makeFakeOffers} from 'utils/mocks/make-fake-offer';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {State} from 'types/state';
import {setOffers} from './offers-reducer';

const api = createApi();
const mockApi = new MockAdapter(api);
const middleware = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middleware);

describe('Async actions: offers', () => {
  it(`should dispatch setOffers when send GET ${ApiRoute.GetOffers}`, async () => {
    const mockOffers = makeFakeOffers();
    mockApi
      .onGet(ApiRoute.GetOffers)
      .reply(200, mockOffers);
    const store = mockStore();

    await store.dispatch(getOffers());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(setOffers.toString());
  });
});
