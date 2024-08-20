import { Outlet } from "react-router-dom";
import useSimpleState from "../utils/useSimpleState";

export default function GlobalContext() {
  // a global context/state
  const global = useSimpleState({
    todo: []
  });
  return <Outlet context={global} />;
}