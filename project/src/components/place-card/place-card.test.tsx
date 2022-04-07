import {makeFakeOffer} from 'utils/mocks/make-fake-offer';
import {PlaceCard} from './place-card';
import {testRenderWrapper as render} from 'utils/test-render-wrapper';
import {screen} from '@testing-library/react';

const mockOffer = makeFakeOffer();

describe('Component: PlaceCard', () => {
  it('should render correctly', () => {
    render(<PlaceCard offer={mockOffer}/>);

    expect(screen.getByTestId('place-card')).toBeInTheDocument();
  });
});
