import { useRouteError, Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function StartPage() {

  const error: any = useRouteError();
  const { status } = error;

  return <>
    <Header />
    <main>
      <h2>{status === 404 ? 'Sidan saknas...' : 'Något gick fel...'}</h2>
      <p>Vi beklagar. <Link to="/">Gå till startsidan.</Link></p>
      <img src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=760" />
    </main>
    <Footer />
  </>;
}