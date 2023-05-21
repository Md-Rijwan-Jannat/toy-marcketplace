import React, { useEffect } from 'react';
import { FaPhoneAlt, FaShoppingCart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Reviews from '../../shared/CustomerReview/Reviews';

const Details = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    const toyDetails = useLoaderData();
    console.log(toyDetails);
    const { _id, photo, toyName, sellerName, quantity, category, price, rating, description, email } = toyDetails;
    return (
        <div>
            <div data-aos="fade-right"
                data-aos-duration="3000" className='grid grid-cols-1 items-center m-5 md:m-16 my-24 border rounded-2xl shadow-xl md:flex-row-reverse'>
                <div className='md:w-full'>
                    <img className='w-full h-full rounded-t-2xl' src={photo} alt="" />
                </div>
                <div className='md:w-full'>
                    <div className='space-y-2  p-5 md:p-16'>
                        <h3 className='text-2xl style text-orange-600'>Toy Name : {toyName}</h3>
                        <p className='pb-4 text-sm'>{description}</p>
                        <h4 className='text-xl'><span className='font-bold text-gray-500'>Seller Name:</span> {sellerName}</h4>
                        <h4 className='text-lg text-red-600'><span className='font-bold text-gray-500'>Category: </span> {category}</h4>
                        <h4 className='text-lg text-red-600'><span className='font-bold text-gray-500'>Price: </span> ${price}</h4>
                        <h4 className='text-lg text-red-600'><span className='font-bold text-gray-500'>In stock: </span> {quantity} items</h4>
                        <h4 className='text-lg'><span className='font-bold text-gray-500'>Seller email: </span> {email}</h4>
                        <h4 className='text-lg flex items-center gap-5'><span className='font-bold text-primary'><FaPhoneAlt></FaPhoneAlt> </span>01819142870</h4>
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
                            <Link className='btn text-xl bg-orange-500 hover:bg-orange-400 border-none btn-block'>By Now <FaShoppingCart className='text-3xl ml-5'></FaShoppingCart></Link>
                        </div>
                        <Link className='btn bg-red-600 hover:bg-red-500 border-none btn-block' to={'/allToys'}>See All Toys</Link>
                    </div>
                </div>
            </div>
            <Reviews></Reviews>
        </div>
    );
};

export default Details;