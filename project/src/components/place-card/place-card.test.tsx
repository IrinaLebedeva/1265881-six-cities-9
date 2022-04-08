import {AppRoute} from 'settings/app-route';
import {generatePath} from 'react-router-dom';
import {makeFakeOffer} from 'utils/mocks/make-fake-offer';
import {PlaceCard} from './place-card';
import {screen} from '@testing-library/react';
import {testRenderWrapper as render} from 'utils/test-render-wrapper';

const mockOffer = makeFakeOffer();

describe('Component: PlaceCard', () => {
  it('should render correctly and display offer info', () => {
    render(<PlaceCard offer={mockOffer}/>);

    expect(screen.getByTestId('place-card')).toBeInTheDocument();
    expect(screen.getByText(mockOffer.title)).toBeInTheDocument();
    expect(screen.getByTestId('link-to-offer')).toHaveAttribute(
      'href',
      generatePath(AppRoute.Property, {id: `${mockOffer.id}`}),
    );
  });
});
