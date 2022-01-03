import { render } from '@testing-library/react';
import Home from './Home';

test('renders hello world on home page', () => {
  const container = render(<Home />);
  expect(container).toMatchSnapshot();
});
