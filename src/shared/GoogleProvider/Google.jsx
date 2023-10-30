import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Google = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { googleUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const googleHandler = () => {
    googleUser()
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
        toast.success("Successfully login with google");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="3000"
      onClick={googleHandler}
      className="border border-rose-500 hover:bg-red-300 rounded-lg my-5 px-5 h-12 flex items-center justify-center gap-3 text-black hover:text-white"
    >
      <img
        className="w-[40px]"
        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        alt=""
      />
      <p className="ml-2">continue with google</p>
    </div>
  );
};

export default Google;
