import { NavLink } from "react-router-dom";
import routes from '../routes';

export default function MainMenu() {
  return <nav>
    {routes.map(({ path, menuLabel }, i) =>
      <NavLink key={i} to={path}>{menuLabel}</NavLink>)}
  </nav>;
}