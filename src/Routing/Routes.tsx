import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Pages/Layout";
import { HomePage } from "../Pages/HomePage";
import GameDetails from "../Pages/GameDetails";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetails /> },
    ],
  },
]);
export default MainRoutes;
