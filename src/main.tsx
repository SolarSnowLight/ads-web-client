import React, {useEffect} from 'react'

import ReactDOM from 'react-dom/client'
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";

import "./index.scss"
import Servers from "./pages/Servers.tsx";
import Ports from "./pages/Ports.tsx";
import Hosts from "./pages/Hosts.tsx";
import Root from "./pages/Root.tsx";
import Error from "./pages/Error.tsx";
import Authentication from "./pages/Authentication.tsx";
import {useLocation} from "react-router";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/servers",
        element: <Servers />,
      },
      {
        path: "/ports",
        element: <Ports />,
      },
      {
        path: "/hosts",
        element: <Hosts />,
      },
      {
        path: "/auth",
        element: <Authentication />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
