//router dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//Layout
import MainLayout from "./layout/MainLayout";
// import Error from "./page/Error";

import { Error, Sale, PageSingl, Home, CreateProduct } from "./page";
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
        {
          path: "/createProduct",
          element: <CreateProduct />,
        },
        {
          path: "/:id",
          element: <PageSingl />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
