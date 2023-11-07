import { Router as RemixRouter } from '@remix-run/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useMemo } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router as browserRouter } from './router';
import store from './store';

interface Props {
  router?: RemixRouter;
}

const App = ({ router = browserRouter }: Props) => {
  const client = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={client}>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </QueryClientProvider>
  );
};

export default App;
