import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="my-24">
      <Helmet>
        <title>Something went wrong</title>
      </Helmet>
      <div className="w-full flex flex-col justify-center items-center bg-yellow-200 rounded-3xl shadow-lg space-y-5 h-1/2 py-16">
        <img
          className="w-1/3 rounded-3xl shadow-xl btn h-full border-none bg-current hover:bg-current"
          src="https://t3.ftcdn.net/jpg/00/52/18/90/360_F_52189001_aZA0NXHUD3F9kPTcxyO04UIVsqDG8nWZ.jpg"
          alt=""
        />
        <h2 className=" font-style text-6xl font-bold">ERROR</h2>
        <h2 className="style text-8xl font-semibold text-red-500">404</h2>
        <Link
          to={"/"}
          className="btn bg-yellow-400 hover:bg-red-500 style text-white text-xl border-none h-16"
        >
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
