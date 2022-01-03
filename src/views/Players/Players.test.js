import { render } from '@testing-library/react';
import Players from './Players';

test('renders players page with the player details', () => {
  const container = render(<Players />);
  expect(container).toMatchSnapshot();
});
