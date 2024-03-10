import { createBrowserRouter } from "react-router-dom";
import { ImageSearchApp } from "./pages/ImageSearchApp";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { ImageDetails } from "./pages/ImageDetails";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/images",
        element: (
          <ProtectedRoute>
            <ImageSearchApp />
          </ProtectedRoute>
        ),
      },
      {
        path: "/bild",
        element: (
          <ProtectedRoute>
            <ImageDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
