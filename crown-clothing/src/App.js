import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Category from "./routes/category/category.component";
import CategoriesPreview from "./routes/categories-preview/categories-preview.component";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { checkUserSession, setCurrentUser } from "./store/user/user-actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // stop listening
  //   // unsubscribe when you unmount
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     dispatch(setCurrentUser(user));
  //   });

  //   return unsubscribe;
  // }, [dispatch]); // don't actually need the dispatch dependecy

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
        { path: "/auth", element: <Authentication /> },
        {
          path: "/shop",
          element: <Shop />,
          children: [
            { index: true, element: <CategoriesPreview /> },
            { path: ":category", element: <Category /> },
          ],
        },
        { path: "/checkout", element: <Checkout /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
