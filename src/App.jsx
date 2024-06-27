import { useState } from "react";
import "./style.scss"
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/navBar/NavBar";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import AddPage from "./pages/AddPage/AddPage";

function App() {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <Outlet />
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/feed",
          element: <Feed />,
        },
        {
          path: "/AddPage",
          element: <AddPage/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
