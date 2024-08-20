import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import GlobalContext from './components/GlobalContext';

// create a React Router based frontend router
const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalContext />,
    children: [{
      element: <App />,
      errorElement: <ErrorPage />,
      children: routes
    }]
  }
]);

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);