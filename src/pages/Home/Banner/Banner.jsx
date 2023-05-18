import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='md:relative clear-left mb-16 rounded-xl'>
            <div className='relative'>
                <img className='h-[200px] rounded-xl md:h-full' src="https://bighearttoys.com/cdn/shop/files/testimonials-bg.jpg?v=1659002406" alt="" />
                <div className='md:text-5xl style brightness-50 absolute top-7 md:top-1/5 font-bold flex left-6 flex-col justify-start w-1/2 md:w-1/3'>
                    <h2 className='text-secondary'>
                        <span className='text-primary mb-2'>Welcome to our</span> toy sports cars site
                    </h2>
                    <Link to={'/addToy'} className='btn md:w-1/3 text-white my-5 style'>add a toy</Link>
                </div>
            </div>
            <div className="carousel w-full h-[200px] md:h-full md:w-1/2 md:absolute right-0 top-0">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://thumbs.dreamstime.com/b/toy-sports-car-model-50039101.jpg" className="rounded-xl md:rounded-r-xl w-full" />
                    <div className="absolute flex justify-center left-5 right-5 bottom-5">
                        <h2 className='bg-gradient-to-r from-blue-300 to-fuchsia-500 px-10 py-1  md:text-4xl font-mono brightness-50 text-white font-extrabold style'>Sports cars</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://c1.wallpaperflare.com/preview/28/685/71/ferrari-toy-car-white-car-close-up-auto.jpg" className="rounded-xl md:rounded-r-xl w-full" />
                    <div className="absolute flex justify-center left-5 right-5 bottom-5">
                        <h2 className='bg-gradient-to-r from-blue-200 to-fuchsia-500 px-10 py-1  md:text-4xl font-mono brightness-50 text-white font-extrabold style'>Sports cars</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/1363867030/photo/car-crash.jpg?b=1&s=170667a&w=0&k=20&c=0eluM-MpSqfCLDbAUFC3dYsjFHlqUqXu9yxWrdIoX2s=" className="rounded-xl md:rounded-r-xl w-full" />
                    <div className="absolute flex justify-center left-5 right-5 bottom-5">
                        <h2 className='bg-gradient-to-r from-blue-500 to-fuchsia-200 px-10 py-1  md:text-4xl font-mono brightness-50 text-white font-extrabold style'>Sports cars</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i0.hippopx.com/photos/66/49/195/toy-car-white-car-car-white-preview.jpg" className="rounded-xl md:rounded-r-xl w-full" />
                    <div className="absolute flex justify-center left-5 right-5 bottom-5">
                        <h2 className='bg-gradient-to-r from-blue-300 to-fuchsia-400 px-10 py-1  md:text-4xl font-mono brightness-50 text-white font-extrabold style'>Sports cars</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;