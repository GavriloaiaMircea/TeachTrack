import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AddClassPage from "./pages/AddClassPage";
import UpdateClassPage from "./pages/UpdateClassPage";
import ClassPage from "./pages/ClassPage";
import AddStudentPage from "./pages/AddStudentPage";
import AddAttendancePage from "./pages/AddAttendancePage";
import EditAttendancePage from "./pages/EditAttendancePage";
import AddGradePage from "./pages/AddGradePage";

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
  {
    path: "/class/:id",
    element: <ClassPage />,
  },
  {
    path: "/class/:id/add-student",
    element: <AddStudentPage />,
  },
  {
    path: "/class/:id/:studentId/add-attendance",
    element: <AddAttendancePage />,
  },
  {
    path: "/class/:id/:studentId/edit-attendance/:attendanceId",
    element: <EditAttendancePage />,
  },
  {
    path: "/class/:id/:studentId/add-grade",
    element: <AddGradePage />,
  },
]);

export default router;
