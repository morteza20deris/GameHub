import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Pages/Layout";
import { HomePage } from "../Pages/HomePage";
import GameDetails from "../Pages/GameDetails";
import { ErrorPage } from "../Pages/ErrorPage";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetails /> },
    ],
  },
]);
export default MainRoutes;
