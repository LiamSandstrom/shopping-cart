import App from "./App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Cart from "../Cart/Cart";
import ErrorPage from "./ErrorPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
      },
      { path: "cart", element: <Cart /> },
    ],
  },
];
