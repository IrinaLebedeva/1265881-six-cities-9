import {makeFakeOffer} from 'utils/mocks/make-fake-offer';
import {PropertyHost} from './property-host';
import {
  render,
  screen
} from '@testing-library/react';

const mockOffer = makeFakeOffer();

describe('Component: PropertyHost', () => {
  it('should render correctly', () => {
    render(<PropertyHost offer={mockOffer}/>);

    expect(screen.getByTestId('property-host')).toBeInTheDocument();
    expect(screen.getByText(mockOffer.host.name)).toBeInTheDocument();
  });
});
