import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllClasses from "../Pages/AllClasses/AllClasses";
import DashBoard from "../Layout/DashBoard";
import SelectedClass from "../Pages/DashBoard/SelectedClass.jsx/SelectedClass";
import ManageUser from "../Pages/DashBoard/ManageUser/ManageUser";

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

    ],
  },
  {
    path: 'dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: 'selectclass',
        element: <SelectedClass />
      },
      {
        path: 'manage-user',
        element: <ManageUser />
      }
    ]
  }
]);
