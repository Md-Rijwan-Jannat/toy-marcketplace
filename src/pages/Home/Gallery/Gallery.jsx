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
                                <img src="https://ae01.alicdn.com/kf/S2b6fb43eec124d13835f450a35f33c92u.jpg?width=800&height=800&hash=1600" alt="" />
                            </div>
                            <div className="card-content">
                                <span className='text-xl font-bold pb-5'> Atractive cars</span>
                            </div>
                        </div>
                        <div className="card swiper-slide shadow-2xl">
                            <div className="card-image">
                                <img src="https://ae01.alicdn.com/kf/Se253ebc78c1f43abaf3751ce6543dbd4o.jpg_640x640Q90.jpg_.webp" alt="" />
                            </div>
                            <div className="card-content">
                                <span className='text-xl font-bold pb-5'> Old cars</span>
                            </div>
                        </div>
                        <div className="card swiper-slide shadow-2xl">
                            <div className="card-image">
                                <img src="https://ae01.alicdn.com/kf/S2cdaf94c4cb34bc8ad68a8201c8a2293L/1-24-Dom-s-Lamborghini-Gallardo-Superleggera-toy-car-Diecast-model-car-12-y-CN-Origin.jpg_Q90.jpg_.webp" alt="" />
                            </div>
                            <div className="card-content">
                                <span className='text-xl font-bold pb-5'> Fansy cars</span>
                            </div>
                        </div>
                        <div className="card swiper-slide shadow-2xl">
                            <div className="card-image">
                                
                                <img src="https://i5.walmartimages.com/asr/2df50d12-b786-4923-acc2-72c35f4b2201.4e5cfd60223e4036e9436e1fb11d3984.jpeg" alt="" />
                            </div>
                            <div className="card-content">
                                <span className='text-xl font-bold pb-5'> Driling cars</span>
                            </div>
                        </div>
                        <div className="card swiper-slide shadow-2xl">
                            <div className="card-image">
                                <img src="https://ae01.alicdn.com/kf/S2419acaaefa94a9aa5b441f870fff2e1d/1-24-Dom-s-Lamborghini-Gallardo-Superleggera-toy-car-Diecast-model-car-12-y-CN-Origin.jpg_220x220.jpg_.webp" alt="" />
                            </div>
                            <div className="card-content">
                                <span className='text-xl font-bold pb-5'> Rovar cars</span>
                            </div>
                        </div>
                        <div className="card swiper-slide shadow-2xl">
                            <div className="card-image">
                                
                                <img src="https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/1000x667/products/1992/7782/73346-MMT-YELLOW-L-Lamborghini-Gallardo-Superleggera-Diecast-Model-Toy-Car-det__70725.1591917007.jpg?c=1" alt="" />
                            </div>
                            <div className="card-content">
                                <span className='text-xl font-bold pb-5'> Track cars</span>
                            </div>
                        </div>

                        
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;