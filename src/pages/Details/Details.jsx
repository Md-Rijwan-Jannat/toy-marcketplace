import React, { useEffect } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Details = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    const toyDetails = useLoaderData();
    console.log(toyDetails);
    const { _id, photo, toyName, sellerName, category, price, rating, description, email } = toyDetails;
    return (
        <div data-aos="fade-up-right" className='md:flex items-center gap-10 m-5 md:m-16 my-24 border rounded-2xl shadow-xl'>
            <div className='md:w-1/2'>
                <img className='w-full h-full rounded-2xl' src={photo} alt="" />
            </div>
            <div className='md:w-1/2'>
                <div className='space-y-2 p-5'>
                    <h3 className='text-2xl style text-orange-600'>Toy Name : {toyName}</h3>
                    <p className='pb-4 text-sm'>{description}</p>
                    <h4 className='text-xl'><span className='font-bold text-gray-500'>Seller Name:</span> {sellerName}</h4>
                    <h4 className='text-lg text-red-600'><span className='font-bold text-gray-500'>Category: </span> {category}</h4>
                    <h4 className='text-lg text-red-600'><span className='font-bold text-gray-500'>Price: </span> ${price}</h4>
                    <h4 className='text-lg'><span className='font-bold text-gray-500'>Email: </span> {email}</h4>
                    <h4 className='text-lg'><span className='font-bold text-gray-500'>Contact: </span>01819142870</h4>
                    <div className='text-lg text-orange-400 font-bold flex items-center justify-between px-10'><span className=' mr-3'>{rating}</span>
                        <div className='flex'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStarHalfAlt></FaStarHalfAlt>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Link to={'/'} className='btn bg-orange-500 hover:bg-orange-400 border-none btn-block style'>Go to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;