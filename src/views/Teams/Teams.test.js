import { render } from '@testing-library/react';
import Teams from './Teams';

test('renders teams page with all the team names listed', () => {
  const container = render(<Teams />);
  expect(container).toMatchSnapshot();
});
