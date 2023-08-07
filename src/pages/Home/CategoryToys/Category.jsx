import { useEffect } from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Category = ({ category }) => {
    useEffect(() => {
        Aos.init()
    }, [])
    const { _id, photo, price, rating, toyName, } = category
    return (
        <div data-aos="fade-up"
            data-aos-duration="1000" className='relative rounded-2xl border shadow-sm bg-white'>
            <img className='w-full h-[240px] lg:h-[220px] xl:h-[300px] md:h-[300px] rounded-t-xl hover:border hover:shadow-xl' src={photo} alt="" />
            <div className='p-5'>
                <h2 className='text-2xl style my-5'>Toy Name: {toyName}</h2>
                <p className='text-lg mb-3'>Price: <span className='text-orange-500'>${price}</span></p>
                <div className='text-yellow-500 mb-16 text-xl flex justify-between items-center'>
                    <span className='mr-2'>{rating}</span>
                    <div className='flex'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalfAlt></FaStarHalfAlt>
                    </div>
                </div>
                <Link to={`/details/${_id}`} className='btn absolute bottom-0 my-5  bg-purple-400 hover:bg-purple-300 border-none'>View Details</Link>
            </div>
        </div>
    );
};

export default Category;
