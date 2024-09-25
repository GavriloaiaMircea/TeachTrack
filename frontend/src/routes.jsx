import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AddClassPage from "./pages/AddClassPage";
import UpdateClassPage from "./pages/UpdateClassPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add-class",
    element: <AddClassPage />,
  },
  {
    path: "/update-class/:id",
    element: <UpdateClassPage />,
  },
]);

export default router;
