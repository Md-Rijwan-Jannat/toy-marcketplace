import React, { useEffect } from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Category = ({ category }) => {
    useEffect(() => {
        Aos.init()
    }, [])
    console.log(category)
    const { _id, photo, price, rating, toyName, } = category
    return (
        <div data-aos="fade-up"
            data-aos-duration="700" className='rounded-2xl border shadow-2xl bg-white'>
            <img className='w-full h-[300px] rounded-t-xl border shadow-lg' src={photo} alt="" />
            <div className='p-5'>
                <h2 className='text-2xl style my-5'>Toy Name: {toyName}</h2>
                <p className='text-lg mb-3'>Price: <span className='text-orange-500'>${price}</span></p>
                <div className='text-yellow-500 mb-5 text-xl flex justify-between items-center'>
                    <span className='mr-2'>{rating}</span>
                    <div className='flex'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalfAlt></FaStarHalfAlt>
                    </div>
                </div>
                <Link to={`/details/${_id}`} className='btn bg-purple-400 hover:bg-purple-300 border-none'>View Details</Link>
            </div>
        </div>
    );
};

export default Category;
