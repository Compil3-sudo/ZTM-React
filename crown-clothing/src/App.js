import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { checkUserSession } from "./store/user/user-actions";
import { useDispatch } from "react-redux";
import LoadingSpinner from "./components/loading-spinner/loading-spinner.component";

const Home = lazy(() => import("./routes/home/home.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Authentication = lazy(() =>
  import("./routes/authentication/authentication.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Category = lazy(() => import("./routes/category/category.component"));
const CategoriesPreview = lazy(() =>
  import("./routes/categories-preview/categories-preview.component")
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]); // don't actually need the dispatch dependecy

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/auth",
          element: <Authentication />,
        },
        {
          path: "/shop",
          element: <Shop />,
          children: [
            {
              index: true,
              element: <CategoriesPreview />,
            },
            {
              path: ":category",
              element: <Category />,
            },
          ],
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
