import {
    createBrowserRouter, 
  } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register"; 
import Details from "../Details/Details";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement : <ErrorPage/>,
      children:[
        {
            path: '/',
            element: <Home/>, 
            loader: ()=> fetch('/public/residantial.json')
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/details/:id',
          element: <Details/>,
          loader: ()=>fetch('/public/residantial.json')
        }

      ]
    },
  ]);
 

  export default router