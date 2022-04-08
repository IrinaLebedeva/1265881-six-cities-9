import {makeFakeReview} from 'utils/mocks/make-fake-review';
import {PropertyReviewItem} from './property-review-item';
import {
  render,
  screen
} from '@testing-library/react';

const mockReview = makeFakeReview();

describe('Component: PropertyHost', () => {
  it('should render correctly', () => {
    render(<PropertyReviewItem review={mockReview} />);

    expect(screen.getByTestId('property-review-item')).toBeInTheDocument();
    expect(screen.getByText(mockReview.user.name)).toBeInTheDocument();
    expect(screen.getByText(mockReview.comment)).toBeInTheDocument();
  });
});
