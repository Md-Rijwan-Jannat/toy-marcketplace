import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css'

const Blogs = () => {
    useEffect(()=>{Aos.init()}, [])
    return (
        <div className='blogs-font m-5'>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='flex flex-col items-center my-12 text-primary'>
                <h2 className='text-3xl style '>Question Or answer</h2>
                <hr className='w-1/3' />
            </div>
            <div className='space-y-10 flex flex-col items-center'>
                <div data-aos="fade-right" className='border shadow-xl md:w-1/2 rounded-lg space-y-5 p-10 m-5'>
                    <h2 className='text-xl'><span className='font-bold mr-1 text-primary'>Ques: </span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p><span className='font-bold mr-1 text-green-500'>Ans:</span> An access token and a refresh token are commonly used in authentication systems to authorize and authenticate client applications. Here's an explanation of what they are, how they work, and where they should be stored on the client-side.</p>
                </div>
                <div data-aos="fade-left" className='border shadow-xl md:w-1/2 rounded-lg space-y-5 p-10 m-5'>
                    <h2 className='text-xl'><span className='font-bold mr-1 text-primary'>Ques: </span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p><span className='font-bold mr-1 text-green-500'>Ans:</span> An access token and a refresh token are commonly used in authentication systems to authorize and authenticate client applications. Here's an explanation of what they are, how they work, and where they should be stored on the client-side.</p>
                </div>
                <div data-aos="fade-right" className='border shadow-xl md:w-1/2 rounded-lg space-y-5 p-10 m-5'>
                    <h2 className='text-xl'><span className='font-bold mr-1 text-primary'>Ques: </span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p><span className='font-bold mr-1 text-green-500'>Ans:</span> An access token and a refresh token are commonly used in authentication systems to authorize and authenticate client applications. Here's an explanation of what they are, how they work, and where they should be stored on the client-side.</p>
                </div>
                <div data-aos="fade-left" className='border shadow-xl md:w-1/2 rounded-lg space-y-5 p-10 m-5'>
                    <h2 className='text-xl'><span className='font-bold mr-1 text-primary'>Ques: </span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p><span className='font-bold mr-1 text-green-500'>Ans:</span> An access token and a refresh token are commonly used in authentication systems to authorize and authenticate client applications. Here's an explanation of what they are, how they work, and where they should be stored on the client-side.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;