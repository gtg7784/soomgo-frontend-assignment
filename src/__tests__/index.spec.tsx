import { screen, waitFor } from '@testing-library/react';

import { renderWithRouter } from '../lib/test';

describe('Index Page', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  test('renders the page', async () => {
    renderWithRouter({
      route: '/',
    });

    const Title = await waitFor(() => screen.findByText('요청서'));
    const Link1 = await waitFor(() => screen.findByText('대청소'));
    const Link2 = await waitFor(() => screen.findByText('영어 과외'));

    expect(Title).toBeInTheDocument();
    expect(Link1).toBeInTheDocument();
    expect(Link2).toBeInTheDocument();
  });
});
