import './Gallery.scss';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export const Gallery = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [toys, setToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch('https://toys-marketplace-server-agmt-11.vercel.app/toys')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = toys.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex text-center flex-col justify-center items-center w-full my-16 px-2 md:px-5"
      >
        <h2 className="text-3xl text-blue-600 style flex flex-col items-center">
          <span>Cars Gallery </span>
        </h2>
        <hr className="w-1/3" />
      </div>
      <motion.div
      className="masonry lg:h-[1000px]"
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {currentItems.map((toy) => (
          <div key={toy._id} className="grid">
            <Link to={`/details/${toy._id}`}>
              <img src={toy.photo} />
              <div className="grid__body">
                <div className="relative">
                  <a className="grid__link" target="_blank" href="/"></a>
                  <h1 className="grid__title">{toy.toyName}</h1>
                </div>
                <div className="mt-auto">
                  <span className="grid__tag">{toy.category}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </motion.div>
      <div className="pagination">
      <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5 }}
  className="pagination"
>
  {toys.length > itemsPerPage && (
    <ul className='flex items-center gap-5 w-full justify-center'>
      {Array(Math.ceil(toys.length / itemsPerPage))
        .fill()
        .map((_, i) => (
          <li key={i}>
            <motion.button
              onClick={() => setCurrentPage(i + 1)}
              className={`px-5 py-2 rounded-lg font-bold hover:bg-rose-500 hover:text-white ${i + 1 === currentPage ? 'bg-rose-500 text-white' : 'bg-rose-100 text-gray-700'}`}
              whileHover={{ scale: 1.05 }}
            >
              {i + 1}
            </motion.button>
          </li>
        ))}
    </ul>
  )}
</motion.div>

      </div>
    </div>
  );
};
