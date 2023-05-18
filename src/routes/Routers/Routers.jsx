import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import ErrorPage from "../../shared/ErrorPage/ErrorPage";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Blogs from "../../pages/Blogs/Blogs";
import AddToys from "../../pages/AddToys/AddToys";
import AllToys from "../../pages/AllToys/AllToys";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/addToy',
          element: <AddToys></AddToys>
        },
        {
          path:'/allToys',
          element: <AllToys></AllToys>
        }
      ]
    },
  ]);

  export default router;