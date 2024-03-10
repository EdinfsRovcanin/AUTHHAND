import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Auth0Provider } from "@auth0/auth0-react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-zg65gkp5arwj6t0z.eu.auth0.com"
      clientId="2mBqqCMmZdLpTMBGCHs0wkI4jVGCU20z"
      authorizationParams={{
        redirect_uri: `${window.location.origin}/images`,
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </Auth0Provider>
  </React.StrictMode>
);
