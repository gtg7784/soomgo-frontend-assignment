import { RouteObject, createBrowserRouter } from 'react-router-dom';

import Layout from './components/layout';
import IndexPage from './pages';
import RequestFormPage from './pages/request-form';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: '/',
        element: <IndexPage />,
      },
      {
        path: '/request-form',
        element: <RequestFormPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
