import { RouteObject, createBrowserRouter } from 'react-router-dom';

import IndexPage from './pages';
import RequestFormPage from './pages/request-form';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <IndexPage />,
    errorElement: <div>404</div>,
    children: [
      {
        path: '/request-form',
        element: <RequestFormPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
