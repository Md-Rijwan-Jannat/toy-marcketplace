import { useEffect, useState } from 'react';
import Toy from './Toy';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaArrowRight } from 'react-icons/fa';
import Gallery from '../../shared/Gallery/Gallery';
import { Helmet } from 'react-helmet';
import useToys from '../../components/hooks/useToys';

const AllToys = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    const [toys, , isLoading] = useToys();
    const [visibleToys, setVisibleToys] = useState(15); // Number of toys to initially display

    const loadMoreToys = () => {
        setVisibleToys(prevVisibleToys => prevVisibleToys + 15);
    };
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
                <button className='md:absolute md:right-[250px] lg:right-80 xl:right-[400px] bg-slate-900 px-2 py-3 rounded-md text-white  hover:bg-slate-800'>Search</button>
            </div>

            {
                !isLoading ? <div className="overflow-x-auto md:overflow-hidden w-full mt-5 mb-10"><table className="table w-full">
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
                        toys.slice(0, visibleToys).map(toy => (
                            <Toy
                                key={toy._id}
                                toy={toy}
                            />
                        ))
                    }

                </table>
                </div> : <div className='w-full h-[500px] flex items-center text-black justify-center'>
                    <span className="loading loading-dots loading-md"></span>
                </div>
            }

            <div className='flex items-center justify-center my-16 style'>
                <button className='btn btn-primary w-1/2' onClick={loadMoreToys}>
                    See More <FaArrowRight className='ml-5'></FaArrowRight>
                </button>
            </div>
        </div>
    );
};

export default AllToys;