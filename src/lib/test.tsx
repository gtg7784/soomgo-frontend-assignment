import { render } from '@testing-library/react';
import { createMemoryRouter } from 'react-router-dom';

import App from '../App';
import { routes } from '../router';

export function renderWithRouter(options: { route: string }) {
  const router = createMemoryRouter(routes, {
    initialEntries: [options.route],
  });

  return render(<App router={router} />);
}
