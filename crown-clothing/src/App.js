import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return <h1>Shop Page</h1>;
};

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
