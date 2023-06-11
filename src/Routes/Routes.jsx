import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllClasses from "../Pages/AllClasses/AllClasses";
import DashBoard from "../Layout/DashBoard";
import SelectedClass from "../Pages/DashBoard/SelectedClass.jsx/SelectedClass";
import ManageUser from "../Pages/DashBoard/ManageUser/ManageUser";
import Instructors from "../Pages/Instructors/Instructors";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
import ManageClass from "../Pages/DashBoard/ManageClass/ManageClass";
import MyClass from "../Pages/DashBoard/MyClass/MyClass";
import Payment from "../Pages/DashBoard/Payment/Payment";
import EnrollClasses from "../Pages/DashBoard/EnrollClasses/EnrollClasses";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "all-classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      // admin route
      {
        path: "manage-user",
        element: (
          <AdminRoute>
            <ManageUser />
          </AdminRoute>
        ),
      },
      {
        path: "manage-class",
        element: (
          <AdminRoute>
            <ManageClass />
          </AdminRoute>
        ),
      },
      // instructor route
      {
        path: "add-class",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "my-class",
        element: (
          <InstructorRoute>
            <MyClass />
          </InstructorRoute>
        ),
      },
      // sutdent route
      {
        path: "selectclass",
        element: <SelectedClass />,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://b7a12-summer-camp-server-side-mahfuz091.vercel.app/booked-classes/${params.id}`
          ),
      },
      {
        path: "enroll-classes",
        element: <EnrollClasses />,
      },
      {
        path: "history",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);
