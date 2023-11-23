import { useState } from "react";
import { RiStarFill } from "react-icons/ri";
import { useEffect } from "react";
import Aos from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Loader } from "../../components/loader/Loader";
import { Title } from "../../components/Title/Title";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    fetch("https://toys-marketplace-server-agmt-11.vercel.app/customer")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [reviews]);

  return (
    <section id="testimonial" className="w-full py-16 px-2 md:px-5">
      <Title title={"Testimonial"} />
      {reviews.length == 0 ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((item) => (
              <div
                key={item._id}
                className="w-full h-auto flex flex-col lgl:flex-row justify-between mb-5"
              >
                <div className="w-full bg-gradient-to-r from-[#edeeef] to-[#f1f7fd] p-8 rounded-lg  flex flex-col md:flex-row gap-8 md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={item.img}
                    alt="testimonialOne"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Bound - Trolola
                    </p>
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      Operation Officer
                    </p>
                  </div>
                </div>
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="w-full py-10 bg-gradient-to-r from-[#f6f7f8] to-[#f2f5f8] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-row gap-2 items-center py-6 border-b-2 border-b-gray-300">
                      <div>
                        <p className="text-base text-gray-900">{item.rating}</p>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-900 font-medium tracking-wide leading-6">
                      {item.comment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Testimonial;
