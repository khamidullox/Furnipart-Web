//router dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//Layout
import MainLayout from "./layout/MainLayout";
// import Error from "./page/Error";

import {
  Error,
  Sale,
  PageSingl,
  Home,
  CreateProduct,
  ChangeDataProduct,
  SingleProdcutPage,
  Cart,
  ZakazaProduct,
} from "./page";
//pages

// redux

//action
import { action as actionCreateProduct } from "./page/CreateProduct";

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
          action: actionCreateProduct,
        },
        {
          path: "/:id",
          element: <PageSingl />,
        },
        {
          path: "/changeProduct",
          element: <ChangeDataProduct />,
        },
        {
          path: "/product/:idP",
          element: <SingleProdcutPage />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/zakazlar",
          element: <ZakazaProduct />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
