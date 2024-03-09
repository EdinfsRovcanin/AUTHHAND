import { createBrowserRouter } from "react-router-dom";
import { ImageSearchApp } from "./pages/ImageSearchApp";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";

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
                element: <ImageSearchApp />,
                
            }

        ]
    }
]);
