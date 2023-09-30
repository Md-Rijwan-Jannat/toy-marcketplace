import { useEffect, useState } from 'react';
import './Gallery.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaDelicious } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper';

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
                data-aos-duration="3000" className='flex text-center flex-col justify-center items-center w-full my-16'>
                <h2 className='text-3xl text-blue-600 style flex flex-col items-center'><span>Cars GallerY </span><FaDelicious className='ml-3 my-5 text-yellow-500 text-6xl'></FaDelicious></h2>
                <hr className='w-1/3' />
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode,]}
                className="mySwiper border-2 rounded-xl bg-yellow-50 "
            >
                <SwiperSlide><div><img className='w-10/12 my-10 h-[100px] md:h-[230px] lg:h-[270px] xl:h-[300px] rounded-xl md:rounded-3xl shadow-2xl' src="https://ae01.alicdn.com/kf/S2b6fb43eec124d13835f450a35f33c92u.jpg?width=800&height=800&hash=1600" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img className='w-10/12 my-10 h-[100px] md:h-[230px] lg:h-[270px] xl:h-[300px] rounded-xl md:rounded-3xl shadow-2xl' src="https://ae01.alicdn.com/kf/Se253ebc78c1f43abaf3751ce6543dbd4o.jpg_640x640Q90.jpg_.webp" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img className='w-10/12 my-10 h-[100px] md:h-[230px] lg:h-[270px] xl:h-[300px] rounded-xl md:rounded-3xl shadow-2xl' src="https://i5.walmartimages.com/asr/2df50d12-b786-4923-acc2-72c35f4b2201.4e5cfd60223e4036e9436e1fb11d3984.jpeg" alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img className='w-10/12 my-10 h-[100px] md:h-[230px] lg:h-[270px] xl:h-[300px] rounded-xl md:rounded-3xl shadow-2xl' src="https://ae01.alicdn.com/kf/S2419acaaefa94a9aa5b441f870fff2e1d/1-24-Dom-s-Lamborghini-Gallardo-Superleggera-toy-car-Diecast-model-car-12-y-CN-Origin.jpg_220x220.jpg_.webp" alt="" /></div></SwiperSlide>
                {
                    toys.map(toy => <SwiperSlide key={toy._id}>
                        <div>
                            <img className='w-10/12 my-10 h-[100px] md:h-[230px] lg:h-[270px] xl:h-[300px] rounded-xl md:rounded-3xl shadow-2xl' src={toy.photo} alt="" />
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Gallery;