import {FavoritesCard} from './favorites-card';
import {makeFakeOffer} from 'utils/mocks/make-fake-offer';
import {testRenderWrapper as render} from 'utils/test-render-wrapper';
import {screen} from '@testing-library/react';

const mockOffer = makeFakeOffer();

describe('Component: FavoritesCard', () => {
  it('should render correctly', () => {
    render(<FavoritesCard offer={mockOffer}/>);

    expect(screen.getByTestId('favorites-place-card')).toBeInTheDocument();
  });
});
