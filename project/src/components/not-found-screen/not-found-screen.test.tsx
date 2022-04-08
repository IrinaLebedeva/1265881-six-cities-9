import {NotFoundScreen} from './not-found-screen';
import {testRenderWrapper as render} from 'utils/test-render-wrapper';
import {screen} from '@testing-library/react';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {

    render(<NotFoundScreen/>);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByTestId('link-app-route-root')).toBeInTheDocument();
  });
});
