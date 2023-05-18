import React from 'react';

const Banner = () => {
    return (
        <div className='relative clear-left mb-16 '>
            <div className='relative'>
                <img src="https://bighearttoys.com/cdn/shop/files/testimonials-bg.jpg?v=1659002406" alt="" />
                <div className='text-5xl style brightness-50 absolute top-1/4 font-bold flex left-6 flex-col justify-start w-2/5'>
                    <h2 className='text-secondary'>
                        <span className='text-primary mb-2'>Welcome to toy</span> our sports cars site
                    </h2>
                    <button className='btn w-1/3 text-white my-5'>EXplore More</button>
                </div>
            </div>
            <div className="carousel h-full w-1/2 absolute right-0 top-0">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i0.hippopx.com/photos/66/49/195/toy-car-white-car-car-white-preview.jpg" className="w-full" />
                    <div className="absolute flex justify-center left-5 right-5 bottom-5">
                        <h2 className='bg-gradient-to-r from-blue-300 to-fuchsia-500 px-10 py-1 text-4xl font-mono brightness-50 text-white font-extrabold style'>Sports cars</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://c1.wallpaperflare.com/preview/28/685/71/ferrari-toy-car-white-car-close-up-auto.jpg" className="w-full" />
                    <div className="absolute flex justify-center left-5 right-5 bottom-5">
                        <h2 className='bg-gradient-to-r from-blue-200 to-fuchsia-500 px-10 py-1 text-4xl font-mono brightness-50 text-white font-extrabold style'>Sports cars</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/1363867030/photo/car-crash.jpg?b=1&s=170667a&w=0&k=20&c=0eluM-MpSqfCLDbAUFC3dYsjFHlqUqXu9yxWrdIoX2s=" className="w-full" />
                    <div className="absolute flex justify-center left-5 right-5 bottom-5">
                        <h2 className='bg-gradient-to-r from-blue-500 to-fuchsia-200 px-10 py-1 text-4xl font-mono brightness-50 text-white font-extrabold style'>Sports cars</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://thumbs.dreamstime.com/b/toy-sports-car-model-50039101.jpg" className="w-full" />
                    <div className="absolute flex justify-center left-5 right-5 bottom-5">
                        <h2 className='bg-gradient-to-r from-blue-300 to-fuchsia-400 px-10 py-1 text-4xl font-mono brightness-50 text-white font-extrabold style'>Sports cars</h2>
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