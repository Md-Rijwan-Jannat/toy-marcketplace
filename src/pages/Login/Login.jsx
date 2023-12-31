import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import Google from "../../shared/GoogleProvider/Google";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import Container from "../../components/container/Container";

const Login = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [show, setShow] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset("");
        navigate(from, { replace: true });
        toast.success("Successfully login");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  return (
    <Container>
      <div className="hero py-28 xl:h-screen">
        <Helmet>Login page</Helmet>
        <div className="hero-content flex-col justify-between lg:flex-row-reverse w-full">
          <div className="flex flex-col md:block  items-end md:w-1/2">
            <h2
              data-aos="fade-right"
              data-aos-duration="3000"
              className="text-4xl style text-secondary md:w-1/2"
            >
              <span className="text-rose-500">Login</span>{" "}
              <span className="text-gray-900">our toy sports </span>{" "}
              <span className="text-rose-500">car site</span>
            </h2>
            <img
              data-aos="fade-down-left"
              data-aos-duration="3000"
              className="w-64"
              src="https://static.vecteezy.com/system/resources/previews/013/923/543/original/blue-car-logo-png.png"
              alt=""
            />
          </div>
          <form
            onSubmit={handleLogin}
            className="flex-shrink-0 md:w-1/2 max-w-sm bg-base-100"
          >
            <div className=" border rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-5 text-rose-500">Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  name="password"
                  required
                  type={show ? "password" : "text"}
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a
                    href="#"
                    onClick={() => setShow(!show)}
                    className="label-text-alt link link-hover font-bold"
                  >
                    {show ? <p>Show password</p> : <p>Hide password</p>}
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="text-white bg-rose-500 hover:bg-rose-600 px-6 py-3 w-full text-center rounded-sm">
                  Login
                </button>
              </div>
              <p className="text-center my-5">
                You do not have a account?{" "}
                <Link
                  className="text-rose-500 font-bold hover:border-b hover:border-rose-500"
                  to={"/register"}
                >
                  Please register
                </Link>
              </p>
            </div>
            <Google></Google>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
