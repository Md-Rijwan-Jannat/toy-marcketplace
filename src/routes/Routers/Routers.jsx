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
import Details from "../../pages/Details/Details";

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
        },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader:({params})=>fetch(`http://localhost:5000/toysDetails/${params.id}`)
        }
      ]
    },
  ]);

  export default router;