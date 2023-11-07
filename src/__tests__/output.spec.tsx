import { screen, waitFor } from '@testing-library/react';

import { renderWithRouter } from '../lib/test';
import store from '../store';

describe('Index Page', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  test('renders the page', async () => {
    store.dispatch({
      payload,
      type: 'Output/setOutput',
    });

    renderWithRouter({
      route: '/output',
    });

    const Title = await waitFor(() => screen.findByText('Output'));
    const Output = screen.getByTestId('output');

    expect(Title).toBeInTheDocument();
    expect(Output).toBeInTheDocument();
    expect(Output.innerHTML).toContain(JSON.stringify(payload, null, 4));
  });
});

const payload = {
  id: 1,
  items: [
    {
      id: 1005,
      answer: '스팀청소',
    },
  ],
};
