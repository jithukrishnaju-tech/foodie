import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ErrorRoute from "./components/ErrorRoute";
import { Provider } from "react-redux";
import RestaurantsMenu from "./components/RestaurantsMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore";
const Grocery = lazy(() => import("./components/Grocery"));
const root = ReactDom.createRoot(document.getElementById("root"));
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app-layout">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantsMenu />,
      },
    ],
    errorElement: <ErrorRoute />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
