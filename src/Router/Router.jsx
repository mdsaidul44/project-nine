import {
    createBrowserRouter, 
  } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement : <ErrorPage/>,
      children:[
        {
            path: '/',
            element: <Home/>
        }
      ]
    },
  ]);
 

  export default router