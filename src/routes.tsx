import { Route } from './interfacesAndTypes';
import StartPage from './pages/StartPage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import StateTestPage from './pages/StateTestPage';

const routes: Route[] = [
  { path: '/', element: <StartPage />, title: 'Välkommen', menuLabel: 'Startsida' },
  { path: '/om-oss', element: <AboutPage />, title: 'Om oss', menuLabel: 'Om oss' },
  { path: '/vara-produkter', element: <ProductPage />, title: 'Våra produkter', menuLabel: 'Våra produkter' },
  { path: '/state-test', element: <StateTestPage />, title: 'State test', menuLabel: 'Test av states' }
];

export default routes;