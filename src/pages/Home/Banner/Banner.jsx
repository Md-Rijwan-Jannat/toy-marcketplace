import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='md:relative clear-left mb-16 rounded-xl'>
            <div className='relative'>
                <img className='h-[260px] rounded-xl md:h-full w-full' src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG95JTIwY2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <div className='md:text-7xl style brightness-50 absolute top-12 md:top-1/5 font-bold flex left-6 flex-col justify-start w-1/2 md:w-1/3'>
                    <h2 className='text-secondary'>
                        <span className='text-primary mb-2'>Welcome to our</span> toy sports cars site
                    </h2>
                    <Link to={'/addToy'} className='btn md:w-[300px] text-white my-12 style'>add a toy</Link>
                </div>
            </div>
            <div className="carousel h-[80px] w-[150px] md:h-1/3 md:w-1/3 absolute top-1/3 right-1 md:left-1/2 md:top-5">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://p1.pxfuel.com/preview/128/290/464/crafts-hobby-miniature-cars-royalty-free-thumbnail.jpg" className="rounded-xl md:rounded-r-xl w-full" />
                    <div className="absolute flex justify-center left-5 right-5 bottom-0 md:bottom-5">
                        <h2 className='lg:bg-gradient-to-r from-blue-300 to-fuchsia-500 md:px-10 py-1  md:text-4xl brightness-50 text-white md:font-extrabold style'>Sports cars</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="md:btn btn-circle">❮</a>
                        <a href="#slide2" className="md:btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://media.cnn.com/api/v1/images/stellar/prod/131031091932-50-lambo-1031.jpg?q=w_1920,h_1080,x_0,y_0,c_fill/w_1280" className="rounded-xl md:rounded-r-xl w-full" />
                    <div className="absolute flex justify-center left-5 right-5 bottom-0 md:bottom-5">
                        <h2 className='lg:bg-gradient-to-r from-blue-300 to-fuchsia-500 md:px-10 py-1  md:text-4xl brightness-50 text-white md:font-extrabold style'>Sports cars</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="md:btn btn-circle">❮</a>
                        <a href="#slide3" className="md:btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_144,q_auto:good,w_256/v1/cms/uploads/08NLS29KQx6qTcXkH05e" className="rounded-xl md:rounded-r-xl w-full" />
                    <div className="absolute flex justify-center left-5 right-5 bottom-0 md:bottom-5">
                        <h2 className='lg:bg-gradient-to-r from-blue-300 to-fuchsia-500 md:px-10 py-1  md:text-4xl brightness-50 text-white md:font-extrabold style'>Sports cars</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="md:btn btn-circle">❮</a>
                        <a href="#slide4" className="md:btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://p1.pxfuel.com/preview/475/202/465/crafts-hobby-miniature-cars-royalty-free-thumbnail.jpg" className="rounded-xl md:rounded-r-xl w-full" />
                    <div className="absolute flex justify-center left-5 right-5 bottom-0 md:bottom-5">
                        <h2 className='lg:bg-gradient-to-r from-blue-300 to-fuchsia-500 md:px-10 py-1  md:text-4xl brightness-50 text-white md:font-extrabold style'>Sports cars</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="md:btn md:btn-circle">❮</a>
                        <a href="#slide1" className="md:btn md:btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;