import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/HomePage/Home";
import Blog from "../../Pages/BlogPAge/Blog";
import Main from "../../LayOut/MainLayOut/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/Errorpage/ErrorPage";
import ChefDetails from "../../Pages/ChefDetailsPage/ChefDetails";
// import PrivetRout from "./PrivetRout/PrivetRout";
import PrivetRout from './../PrivetRoute/PrivetRoute';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path : '/login',
        element :<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path: '/chefDetails',
        element: <PrivetRout><ChefDetails></ChefDetails></PrivetRout>,
      }
    ],
  },
]);
