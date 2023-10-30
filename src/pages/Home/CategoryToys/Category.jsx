import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Category.css";

const Category = ({ category }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { _id, photo, price, toyName } = category;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000 "
      className="toy-card-root font w-full"
    >
      <div className="card">
        <div
          className="cover item-a"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <h1>
            Little
            <br />
            {toyName}
          </h1>
          <span className="price">${price}</span>
          <div className="card-back">
            <Link to={"/addToy"}>Add toy</Link>
            <Link to={`/details/${_id}`}>View detail</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
