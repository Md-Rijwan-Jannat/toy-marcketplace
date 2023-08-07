import {  useEffect, useState } from 'react';
import Toy from './Toy';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaArrowRight } from 'react-icons/fa';
import Gallery from '../../shared/Gallery/Gallery';
import { Helmet } from 'react-helmet';

const AllToys = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`https://toys-marketplace-server-agmt-11.vercel.app/toys`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setToys(data);
            })
            .catch()
    }, [])
    // search button add

    const [seMore, setSeeMore] = useState(15)

    const seeMoreHandle = () => {
        setSeeMore(seMore + seMore)
    }
    return (
        <div className='mt-16'>
            <Helmet><title>All toys is here</title></Helmet>
            <Gallery></Gallery>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='flex flex-col items-center my-16 text-primary'>
                <h2 className='text-3xl style '>All Toys are Here {toys.length}</h2>
                <hr className='w-1/3' />
            </div>
            {/* search */}
            <div className='md:relative flex  items-center justify-center rounded-none my-24'>
                <input type="search" required name='search' placeholder='search' className="input input-bordered w-1/3" />
                <button className= 'md:absolute md:right-[250px] lg:right-80 xl:right-[400px] bg-slate-900 px-2 py-3 rounded-md text-white  hover:bg-slate-800'>Search</button>
            </div>

            {
                toys ? <div className="overflow-x-auto md:overflow-hidden w-full mt-5 mb-10"><table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Photo</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    {
                        toys.map(toy => <Toy
                            key={toy._id}
                            toy={toy}
                        ></Toy>)
                    }

                </table>
                </div> : <div className='w-full h-[500px] flex items-center justify-center'>
                    <progress className="progress w-56"></progress>
                </div>
            }

            <div className='flex items-center justify-center my-16 style'>
                <button onClick={() => seeMoreHandle()} className='btn btn-primary w-1/2'>See More <FaArrowRight className='ml-5'></FaArrowRight></button>
            </div>
        </div>
    );
};

export default AllToys;