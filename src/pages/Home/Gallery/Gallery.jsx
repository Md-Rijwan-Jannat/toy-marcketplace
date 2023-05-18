import React from 'react';
import '../Gallery/Gallery.css'

const Gallery = () => {
    const
        photos = [

            'https://example.com/photo1.jpg'
            ,

            'https://example.com/photo2.jpg'
            ,

            // Add more photo URLs here

        ];
    return (
        <div>
            <div className='flex flex-col justify-center items-center w-full mb-16'>
                <h2 className='text-3xl style'>Cars Gallery</h2>
                <hr className='w-1/3' />
            </div>
            <div className='body'>
                <section className="swiper mySwiper overflow-x-scroll ">
                    <div className="swiper-wrapper">
                        <div className="card swiper-slide shadow-2xl">
                            <div className="card-image">
                                <img src="https://m.media-amazon.com/images/I/71N+LTwtNJL.jpg" alt="" />
                            </div>
                            <div className="card-content">
                                <span className='text-xl mb-5'> Atractive cars</span>
                            </div>
                        </div>
                        <div className="card swiper-slide shadow-2xl">
                            <div className="card-image">
                                <img src="https://thumbs.dreamstime.com/b/vintage-red-car-toy-model-kids-automotive-cute-engine-s-parking-traffic-driving-clean-playful-childhood-sport-sports-toys-race-157499923.jpg" alt="" />
                            </div>
                            <div className="card-content">
                                <span className='text-xl mb-5'> Old cars</span>
                            </div>
                        </div>
                        <div className="card swiper-slide shadow-2xl">
                            <div className="card-image">
                                <img src="https://wallpaperaccess.com/full/2896369.jpg" alt="" />
                            </div>
                            <div className="card-content">
                                <span className='text-xl mb-5'> Fansy cars</span>
                            </div>
                        </div>
                        <div className="card swiper-slide shadow-2xl">
                            <div className="card-image">
                                <img src="https://images.pexels.com/photos/2767818/pexels-photo-2767818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            </div>
                            <div className="card-content">
                                <span className='text-xl mb-5'> Driling cars</span>
                            </div>
                        </div>
                        <div className="card swiper-slide shadow-2xl">
                            <div className="card-image">
                                <img src="https://images.pexels.com/photos/2767817/pexels-photo-2767817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div className="card-content">
                                <span className='text-xl mb-5'> Rovar cars</span>
                            </div>
                        </div>
                        <div className="card swiper-slide shadow-2xl">
                            <div className="card-image">
                                <img src="https://www.whatdowedoallday.com/wp-content/uploads/2020/03/toy-car-play-ideas-feature.jpg" alt="" />
                            </div>
                            <div className="card-content">
                                <span className='text-xl mb-5'> Track cars</span>
                            </div>
                        </div>

                        
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;