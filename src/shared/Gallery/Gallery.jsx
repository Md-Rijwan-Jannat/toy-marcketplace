import React, { useEffect, useState } from 'react';
import './Gallery.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaDelicious, FaUsers } from 'react-icons/fa';

const Gallery = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('https://toys-marketplace-server-agmt-11.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div >
            <div data-aos="fade-up"
                data-aos-duration="3000" className='flex flex-col justify-center items-center w-full mb-16'>
                <h2 className='text-3xl text-blue-600 style flex flex-col items-center'><span>Cars GallerY </span><FaDelicious className='ml-3 my-5 text-yellow-500 text-6xl'></FaDelicious></h2>
                <hr className='w-1/3' />
            </div>
            <div className='body' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <section className="swiper mySwiper overflow-x-scroll overflow-hidden">
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
                        {
                            toys.map(toy => <div className="card swiper-slide shadow-2xl">
                                <div className="card-image">

                                    <img src={ toy.photo} alt="" />
                                </div>
                                <div className="card-content">
                                    <span className='text-xl font-bold pb-5'> {toy.toyName}</span>
                                </div>
                            </div>)
                        }


                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;