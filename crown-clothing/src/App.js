import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

function App() {
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
        { path: "/shop", element: <Shop /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
