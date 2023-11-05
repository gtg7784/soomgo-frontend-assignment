import { Router as RemixRouter } from '@remix-run/router';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router as browserRouter } from './router';

interface Props {
  router?: RemixRouter;
}

const App = ({ router = browserRouter }: Props) => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
