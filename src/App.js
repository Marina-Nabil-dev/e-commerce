import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LiveAuction from "./pages/LiveAuction";
import Search from "./pages/Search";
import Layout from "./pages/Layout";
import NotFound from "./components/NotFound";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/live-auctions",
          element: <LiveAuction />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "*",
          element: <NotFound />,
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <ToastContainer />
    </RouterProvider>
  );
}

export default App;
