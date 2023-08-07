import Aos from 'aos';
import  { useEffect } from 'react';
import { FaCar, FaLocationArrow } from 'react-icons/fa';
import 'aos/dist/aos.css'

const OurNextShop = () => {
    useEffect(() => { Aos.init() }, [])
    return (
        <div className='rounded-2xl py-24 px-5 shadow-md '> 
            <div data-aos="fade-up"
                data-aos-duration="3000" className='flex flex-col justify-center items-center w-full mb-16'>
                <h2 className='text-3xl text-primary style flex text-center flex-col items-center'><span>Our Shop locatioN </span><FaCar className='ml-3 my-5 text-5xl'></FaCar></h2>
                <hr className='w-1/3' />
            </div>
            <div className='md:flex gap-10 w-full m-x-2 my-24 items-center justify-center space-y-10'>
                <div data-aos="zoom-in-up" className='bg-blue-100 hover:bg-blue-200 rounded-3xl p-4 md:p-5 flex flex-col justify-center md:w-1/2 h-1/2'>
                    <h2 className='text-3xl style text-primary'>Our toy Sports cars Shop in Dhaka</h2>
                    <div className='py-5 md:py-10'>
                        <img className='w-full h-full  rounded-3xl' src="https://media.istockphoto.com/id/1017054732/photo/assorted-colorful-kiddie-cars-or-toy-cars-on-display-inside-a-toy-store.jpg?s=170667a&w=0&k=20&c=j6ZNyYTZ5LeQjlrKNOQHZmo_L_t5L_kpjVYWIscf1DU=" alt="" />
                    </div>
                    <p>Gazi Group start by new showroom of Gazi Toys Play Station. Near by Rampura TV center.</p>
                    <p className='text-lg m-3'><span className='font-bold'>Address:</span> 218/1 E Rampura, Dhaka 1219</p>
                    <button className='btn btn-primary mt-5 btn-block style'>Location <FaLocationArrow className='ml-3'></FaLocationArrow> </button>
                </div>
                <div className='md:flex flex-col gap-10 md:w-1/2'>
                    <div data-aos="zoom-in-up" className='bg-purple-100 hover:bg-purple-200 rounded-3xl p-4 md:p-5'>
                        <h2 className='text-3xl style text-purple-500'>Our toy Sports cars Shop in Dhaka</h2>
                        <div className='py-5 md:py-10'>
                            <img className='w-full h-ull rounded-3xl' src="https://lh5.googleusercontent.com/p/AF1QipNVnIZZnEanWOSRQaxFhrgJIu7gX_FtdM5pbdT8" alt="" />
                        </div>
                        <p>New and used Toy Vehicles for sale in Fashiatala, Dhaka, Bangladesh on Facebook Marketplace. ... Toy airplane set for kids in কেরানীগঞ্জ, ঢাকা.</p>
                        <p className='text-xl m-3'><span className='font-bold'>Address:</span> House:01, Road:11, Block: L, South, Dhaka 1219</p>
                        <button className='btn bg-purple-500 hover:bg-purple-500 border-none mt-5 btn-block style'>Location <FaLocationArrow className='ml-3'></FaLocationArrow> </button>
                    </div>
                    <div data-aos="zoom-in-up" className='bg-red-100 hover:bg-red-200 rounded-3xl p-4 mt-10 md:p-5'>
                        <h2 className='text-3xl style text-red-500'>Our toy Sports cars Shop in Dhaka</h2>
                        <div className='py-5 md:py-10'>
                            <img className='w-full h-ull rounded-3xl ' src="https://t3.ftcdn.net/jpg/01/62/15/94/360_F_162159474_fLZzG2KyXQHOAQMSQnP9sPPG0IMu4i2Z.jpg" alt="" />
                        </div>
                        <p>Bangla-Toys.com - First Bangladeshi Online Toy Store. 27553 likes · 1 talking about this. Bangla Toys is the first Bangladeshi online toy store. </p>
                        <p className='text-xl m-3'><span className='font-bold'>Address:</span>465/10, BondhuNibash Rampura dhaka 1212, Dhaka 1212</p>
                        <button className='btn bg-red-500 hover:bg-red-500 border-none mt-5 btn-block style'>Location <FaLocationArrow className='ml-3'></FaLocationArrow> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurNextShop;