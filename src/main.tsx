import React from 'react'
import "./index.scss"

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Servers from "./pages/Servers.tsx";
import Ports from "./pages/Ports.tsx";
import Hosts from "./pages/Hosts.tsx";
import Root from "./pages/Root.tsx";
import Error from "./pages/Error.tsx";

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
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
