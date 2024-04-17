import {
    createBrowserRouter, 
  } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register"; 
import Details from "../Details/Details";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile"; 
import About from "../component/About/About";
import Contact from "../component/Contact/Contact";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

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
          element: <PrivateRouter><Details/></PrivateRouter>,
          loader: ()=>fetch('/public/residantial.json')
        },
        {
          path: '/update',
          element: <UpdateProfile/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        }

      ]
    },
  ]);
 

  export default router