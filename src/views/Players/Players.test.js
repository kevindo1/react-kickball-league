import { render } from '@testing-library/react';
import Players from '../../views/Players/Players';

test('renders players page with the player details', () => {
  const container = render(<Players />);
  expect(container).toMatchSnapshot();
});
