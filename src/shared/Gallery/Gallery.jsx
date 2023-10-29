import './Gallery.scss';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader } from '../../components/hooks/container/loader/Loader';
import { Title } from '../../components/hooks/container/Title/Title';


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
      <Title title={"Cars Gallery"}/>
      {
       currentItems.length== 0 ?<Loader/>: <>
      <div
      className="masonry lg:h-[1000px] px-3 lg:px-1">
         {currentItems.map((toy) => (
          <div  data-aos="fade-up"
          data-aos-duration="2000 " key={toy._id} className="grid">
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
      </div>
        </> 
       }
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
