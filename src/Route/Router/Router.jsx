import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import Home from "../../Pages/HomePage/Home";
import Blog from "../../Pages/BlogPAge/Blog";
import Main from "../../LayOut/MainLayOut/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/Errorpage/ErrorPage";
// import ChefDetails from "../../Pages/ChefDetailsPage/ChefDetails";

import PrivetRout from "./../PrivetRoute/PrivetRoute";
import Destination from "../../Pages/Destination/Destination";
import Contact from "../../Pages/Contact/Contact";
// import MyDocument from "../../Pages/MyDocument ";
const LazyHome = React.lazy(() => import("../../Pages/HomePage/Home"));

const LazyChefDetails = React.lazy(() =>
  import("../../Pages/ChefDetailsPage/ChefDetails")
);
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback="Loading...">
            <LazyHome></LazyHome>
          </React.Suspense>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/destination",
        element: <Destination></Destination>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    //   {
    //  path: '/pdfTest',
    //  element:<MyDocument></MyDocument> ,
    //   },
      {
        path: "/chefDetails/:id",
        element: (
          <React.Suspense fallback="Loading...">
            {" "}
            <PrivetRout>
              <LazyChefDetails></LazyChefDetails>
            </PrivetRout>
          </React.Suspense>
        ),

        loader: ({ params }) =>
          fetch(
            `https://b7-a10-chef-recipe-hunter-server-side-ittarek.vercel.app/chefData/${params.id}`
          ),
      },
    ],
  },
]);
