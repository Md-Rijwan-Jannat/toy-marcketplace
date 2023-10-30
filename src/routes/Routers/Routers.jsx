import { createBrowserRouter } from "react-router-dom";
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
        path: "/",
        element: <Home></Home>,
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
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/addToy",
        element: (
          <PrivateRouter>
            <AddToys></AddToys>
          </PrivateRouter>
        ),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRouter>
            <Details></Details>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toys-marketplace-server-agmt-11.vercel.app/toysDetails/${params.id}`
          ),
      },
      {
        path: "/myToys/:email",
        element: (
          <PrivateRouter>
            <MyToys></MyToys>
          </PrivateRouter>
        ),
      },
      {
        path: "/updateToy/:id",
        element: (
          <PrivateRouter>
            <UpdateToy></UpdateToy>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toys-marketplace-server-agmt-11.vercel.app/toysDetails/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
