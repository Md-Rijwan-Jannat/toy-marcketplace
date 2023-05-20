import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        Aos.init();
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/customer')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data);
            })
    }, [])
    return (
        <div data-aos="fade-up"
            data-aos-duration="2000" className='my-16 flex flex-col items-center m-5 bg-base-200 rounded-xl shadow-2xl py-16 p-5'>
            <div className='flex flex-col justify-center items-center w-full mb-16'>
                <h2 className='text-3xl style'>Customer Reviews</h2>
                <hr className='w-1/3' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
                {reviews.map((review) => (
                    <div data-aos="fade-up"
                        data-aos-duration="1000" key={review.id} className="w-full bg-white shadow-md rounded-lg p-4" >
                        <div className='absolute -top-10 right-1/3'>
                            <img className='w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={review.img} alt="" />
                        </div>
                        <div className='relative pt-16 text-center'>
                            <h2 className="text-lg font-bold mt-5">{review.name}</h2>
                            <p className="mt-2"><span className='font-bold'>Comment: </span> {review.comment}</p>
                            <div className="flex items-center justify-center mt-4">
                                <span className="text-yellow-500 mr-4">{review.rating}</span>
                                <FaStar className='text-orange-400'></FaStar>
                                <FaStar className='text-orange-400'></FaStar>
                                <FaStar className='text-orange-400'></FaStar>
                                <FaStar className='text-orange-400'></FaStar>
                                <FaStar className='text-orange-400'></FaStar>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
