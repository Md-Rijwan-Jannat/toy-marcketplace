import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {reviews.map((review) => (
                    <div data-aos="fade-up"
                        data-aos-duration="1000" key={review.id} className="w-full bg-white shadow-md rounded-lg p-4" >
                        <img className='w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={review.img} alt="" />
                        <h2 className="text-lg font-bold">{review.name}</h2>
                        <p className="mt-2"><span className='font-bold'>Comment: </span> {review.comment}</p>
                        <div className="flex items-center mt-4">
                            <span className="text-yellow-500">{review.rating}</span>
                            <svg
                                className="w-4 h-4 text-yellow-500 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 1l2.928 6.375 6.572.601-4.766 4.6L16 18.625 10 15.25 4 18.625l1.266-5.049-4.766-4.6 6.572-.6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="w-4 h-4 text-yellow-500 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 1l2.928 6.375 6.572.601-4.766 4.6L16 18.625 10 15.25 4 18.625l1.266-5.049-4.766-4.6 6.572-.6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="w-4 h-4 text-yellow-500 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 1l2.928 6.375 6.572.601-4.766 4.6L16 18.625 10 15.25 4 18.625l1.266-5.049-4.766-4.6 6.572-.6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="w-4 h-4 text-yellow-500 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 1l2.928 6.375 6.572.601-4.766 4.6L16 18.625 10 15.25 4 18.625l1.266-5.049-4.766-4.6 6.572-.6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="w-4 h-4 text-yellow-500 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 1l2.928 6.375 6.572.601-4.766 4.6L16 18.625 10 15.25 4 18.625l1.266-5.049-4.766-4.6 6.572-.6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
