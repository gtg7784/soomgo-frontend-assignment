import { Router as RemixRouter } from '@remix-run/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router as browserRouter } from './router';

interface Props {
  router?: RemixRouter;
}

const App = ({ router = browserRouter }: Props) => {
  const client = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
