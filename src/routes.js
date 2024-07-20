import { useRoutes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <AppLayout />,
    },
  ]);
  return routes;
}
