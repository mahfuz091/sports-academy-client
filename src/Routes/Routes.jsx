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
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "selectclass",
        element: <SelectedClass />,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/carts/${params.id}`),
      },
      {
        path: "manage-user",
        element: <ManageUser />,
      },
      {
        path: "add-class",
        element: <AddClass />,
      },
      {
        path: "manage-class",
        element: <ManageClass />,
      },
      {
        path: "my-class",
        element: <MyClass />,
      },
    ],
  },
]);
