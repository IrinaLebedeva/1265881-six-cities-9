import {AppRoute} from 'settings/app-route';
import {generatePath} from 'react-router-dom';
import {FavoritesCard} from './favorites-card';
import {makeFakeOffer} from 'utils/mocks/make-fake-offer';
import {screen} from '@testing-library/react';
import {testRenderWrapper as render} from 'utils/test-render-wrapper';

const mockOffer = makeFakeOffer();

describe('Component: FavoritesCard', () => {
  it('should render correctly and display offer info', () => {
    render(<FavoritesCard offer={mockOffer}/>);

    expect(screen.getByTestId('favorites-place-card')).toBeInTheDocument();
    expect(screen.getByText(mockOffer.title)).toBeInTheDocument();
    expect(screen.getByTestId('link-to-offer')).toHaveAttribute(
      'href',
      generatePath(AppRoute.Property, {id: `${mockOffer.id}`}),
    );
  });
});
