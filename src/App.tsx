import { Outlet, useLocation, useOutletContext } from 'react-router-dom';
import useFetch from './utils/useFetch';
import routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

export default function App() {

  // set the document title depending on route
  const location = useLocation();
  const { title } = routes.find(route => route.path === location.pathname) ?? { title: '' };
  document.title = (title ? title + ': ' : '') + 'Vår sajt';

  const global: any = useOutletContext();

  // prevent the user from adding 'Fuska' to the todo list
  global.onChange('todo', (value: string[]) => {
    if (value.includes('Fuska')) {
      alert('Du ska inte fuska!');
      return value.filter((x: string) => x !== 'Fuska');
    }
  });

  // fetch some data from the backend
  // and don't render anything until it has been fetched
  // (to prevent 'flickering' re-renders on pages using it)
  useFetch('onMount', '/api/test').then((response: any) =>
    global.messageFromBackend = response);
  if (!global.messageFromBackend) { return null; }

  return <>
    <Header />
    <main>
      <Outlet context={global} />
    </main>
    <Footer />
  </>;
}