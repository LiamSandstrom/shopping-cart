import App from "./App/App";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
        loader: async () => {
          await new Promise((r) => setTimeout(r, 1000));
        },
      },
      { path: "cart", element: <Cart /> },
    ],
  },
];
