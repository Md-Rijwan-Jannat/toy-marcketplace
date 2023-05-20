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
import PrivateRouter from "../../PrivateRouter/PrivateRouter";
import MyToys from "../../pages/MyToys/MyToys";
import UpdateToy from "../../pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
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
        path: '/allToys',
        element: <AllToys></AllToys>
      },
      {
        path: '/details/:id',
        element: <PrivateRouter><Details></Details></PrivateRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/toysDetails/${params.id}`)
      },
      {
        path: '/myToys/:email',
        element: <MyToys></MyToys>,
        loader: ({ params }) => fetch(`http://localhost:5000/my-toys/${params.email}`)
      },
      {
        path: '/updateToy/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({params}) => fetch(`http://localhost:5000/toysDetails/${params.id}`)
      }
    ]
  },
]);

export default router;