import { useContext } from "react";
import "./style.scss";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/navBar/NavBar";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import AddPage from "./pages/AddPage/AddPage";
import { AuthContext } from "./context/authContext";
import RecipeModel from "./pages/RecipeModel/RecipeModel";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { dark } = useContext(DarkModeContext);
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${dark ? "dark" : "light"}`}>
          <NavBar />
          <div style={{ display: "flex" }} className="big-container">
            <Outlet />
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      //if user not logd in he dirctly go to login page
      return <Navigate to="/login" />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },

        {
          path: "/feed",
          element: <Feed />,
        },
        {
          path: "/AddPage",
          element: <AddPage />,
        },
        {
          path: "/recipes/:id",
          element: <RecipeModel />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
