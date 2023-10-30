import { useEffect, useState } from "react";
import debounce from "lodash/debounce"; // Import debounce function from lodash
import Toy from "./Toy";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import useToys from "../../components/hooks/useToys";
import Container from "../../components/hooks/container/Container";
import { Loader } from "../../components/hooks/container/loader/Loader";

const AllToys = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [toys, , isLoading] = useToys();
  const [visibleToys, setVisibleToys] = useState(15); // Number of toys to initially display
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce the search function to reduce filtering frequency
  const debouncedSearch = debounce((value) => setSearchTerm(value), 300);

  // Filter toys based on search term
  const filteredToys = toys.filter(
    (toy) =>
      (toy.toyName &&
        toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (toy.sellerName &&
        toy.sellerName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (toy.email &&
        toy.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (toy.price && toy.price.toString().includes(searchTerm)) ||
      (toy.quantity && toy.quantity.toString().includes(searchTerm)) ||
      (toy.data && toy.data.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const loadMoreToys = () => {
    setVisibleToys((prevVisibleToys) => prevVisibleToys + 15);
  };

  // Call debouncedSearch instead of setSearchTerm directly
  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };

  return (
    <Container>
      <div className="pt-16 px-2 md:px-5">
        <Helmet>
          <title>All toys is here</title>
        </Helmet>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col items-center my-16 text-rose-500"
        >
          <h2 className="text-3xl style ">
            All Toys are Here{" "}
            <span className="text-5xl text-rose-500">{toys.length}</span>
          </h2>
          <hr className="w-1/3" />
        </div>
        {/* search */}
        <div className="md:relative flex  items-center justify-center rounded-none my-24">
          <input
            type="search"
            required
            name="search"
            placeholder="search"
            className="input input-bordered w-1/3"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="md:absolute md:right-[250px] lg:right-80 xl:right-[400px] bg-slate-900 px-2 py-3 rounded-md text-white  hover:bg-slate-800">
            Search
          </button>
        </div>

        {!isLoading ? (
          <div className="overflow-x-auto md:overflow-hidden w-full mt-5 mb-10">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Photo</th>
                  <th>Toy Name</th>
                  <th>Seller Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Details</th>
                </tr>
              </thead>
              {filteredToys.length === 0 ? (
                <div className="relative z-40">
                  <Loader />{" "}
                </div>
              ) : (
                filteredToys
                  .slice(0, visibleToys)
                  .map((toy) => <Toy key={toy._id} toy={toy} />)
              )}
            </table>
          </div>
        ) : (
          <div className="w-full h-[500px] flex items-center text-black justify-center">
            <span className="loading loading-dots loading-md"></span>
          </div>
        )}

        <div className="flex items-center justify-center my-16 style">
          <button
            className="text-white py-3 px-6 rounded-sm bg-rose-500 hover:bg-rose-600 border-none flex items-center gap-4"
            onClick={loadMoreToys}
          >
            See More <FaArrowRight className="ml-5"></FaArrowRight>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default AllToys;
