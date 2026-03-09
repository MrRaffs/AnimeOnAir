import Home from "./pages/Home/Home";
import AnimeDetail from "./pages/AnimeDetail/AnimeDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const myRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/anime",
    element: <AnimeDetail />,
  },
];

function App() {
  return (
    <>
      {/* <Home /> */}
      <RouterProvider router={createBrowserRouter(myRoutes)} />
    </>
  );
}

export default App;
