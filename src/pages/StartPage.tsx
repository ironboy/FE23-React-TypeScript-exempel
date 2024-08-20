import { useOutletContext } from "react-router-dom";

export default function StartPage() {

  const global: any = useOutletContext();

  return <>
    <h2>Startsidan</h2>
    <p>Välkommen till vår sajt!</p>
    <p>Vår backend är glad idag och säger: <i>{JSON.stringify(global.messageFromBackend)}</i></p>
    <img src="https://images.unsplash.com/photo-1533745848184-3db07256e163?q=80&w=760" />
  </>;
}