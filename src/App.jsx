//router dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//Layout
import MainLayout from "./layout/MainLayout";
import Home from "./page/Home";
import Error from "./page/Error";
import Sale from "./page/Sale";
//pages

// redux

//action
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/sale",
          element: <Sale />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
