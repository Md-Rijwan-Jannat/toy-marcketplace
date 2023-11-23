import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"; // Removed useNavigate
import Aos from "aos";
import "aos/dist/aos.css";
import Reviews from "../../shared/CustomerReview/Reviews";
import { Helmet } from "react-helmet";
import Container from "../../components/container/Container";
import useToys from "../../components/hooks/useToys";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { MdEmail, MdToys } from "react-icons/md";
import { BiSolidCategory, BiSolidUserRectangle } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

const Details = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const toyDetails = useLoaderData();
  const navigate = useNavigate();
  console.log(toyDetails);
  const {
    photo,
    toyName,
    sellerName,
    category,
    price,
    rating: toy_rate,
    description,
    email,
  } = toyDetails;
  const [toys] = useToys();
  const related_toys = toys.filter((data) => data.category === category);
  console.log(related_toys);

  const clickHandler = (_id) => {
    // You can use an arrow function to fix the issue
    navigate(`/details/${_id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        className="pt-28 px-2 md:px-5 p-5"
      >
        <Helmet>
          <title>Toys details</title>
        </Helmet>
        <div data-aos="fade-right" data-aos-duration="3000" className="">
          <div className="mt-10  flex flex-col md:flex-row gap-10 m-2 rounded">
            <div className="w-full md:w-1/2 rounded flex flex-col items-center justify-center">
              <img className="w-full lg:w-[300px]" src={photo} alt="" />
              <button className="bg-gradient-to-r from-[#b3d8ee] to-[#d2e0ee] w-full text-center hover:bg-green-200 px-10 py-3 mx-5 justify-center rounded-md my-3 flex items-center gap-2 text-rose-600 font-sans">
                <MdToys /> Delivery Charge:{" "}
                <span className="text-green-600 font-sans"> Free </span>
              </button>
              <button className="bg-rose-500 hover:bg-rose-600 px-10 py-3 text-white my-3 flex items-center justify-center gap-2 w-full">
                <FiShoppingCart /> Add to Cart
              </button>
            </div>
            <div className="flex flex-col items-start w-full md:w-1/2">
              <h2 className="text-4xl font-semibold mb-5">{toyName}</h2>
              <div className="flex flex-col items-start mb-5 gap-1">
                <p className="text-xl flex items-center gap-2 text-green-400">
                  <FaCheckCircle className="mr-2 mt-1 text-green-400" /> In
                  stock
                </p>
                <p className="text-3xl text-black font-thin">{"$" + price}</p>
              </div>
              <p className="text-[15px] flex items-center gap-2 mb-2">
                <MdEmail className="mr-2 mt-1" />
                Email: <span className="text-rose-500">{email}</span>
              </p>
              <p className="text-[15px] flex items-center gap-2 mb-2">
                <BiSolidUserRectangle className="mr-2 mt-1" /> Seller:{" "}
                <span className="text-rose-500">{sellerName}</span>
              </p>
              <p className="text-[15px] flex items-center gap-2 mb-2">
                <BiSolidCategory className="mr-2 mt-1" /> Category:{" "}
                <span className="text-rose-500">{category}</span>
              </p>
              <div className="flex items-center gap-2 mt-4">
                <span className="mt-[0.6] mr-2">{toy_rate + ".0"} </span>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
              </div>
              <p className="my-3 text-sm">{description}</p>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h3 className="text-rose-500 text-3xl font-semibold border-b-2 border-rose-600 w-[200px]">
            <span className="pb-3"> Related Toys</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 my-12">
            {related_toys.map((toy) => (
              <div data-aos="fade-up" data-aos-duration="3000 " key={toy._id}>
                <div
                  onClick={() => clickHandler(toy._id)}
                  className="group relative rounded"
                >
                  <div className="group-hover:scale-105 transition-transform duration-300 rounded-md hover:border-2 hover:border-gray-500 active:border-2 active:border-gray-500">
                    <img
                      className="w-full bg-cover h-[200px]"
                      src={toy.photo}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Reviews></Reviews>
    </Container>
  );
};

export default Details;
