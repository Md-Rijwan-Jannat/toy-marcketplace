import React, { useContext, useEffect, useState } from 'react';
import Toy from './Toy';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const AllToys = () => {
    const { user } = useContext(AuthContext)
    useEffect(() => {
        Aos.init();
    }, [])
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/toys`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setToys(data);
            })
            .catch()
    }, [])
    // search button add

    const [searchTerm, setSearchTerm] = useState('');
    const [seMore, setSeeMore] = useState(10)
    const slice = toys.slice(0, seMore)

    const seeMoreHandle = () => {
        setSeeMore(seMore + seMore)
    }
    return (
        <div>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='flex flex-col items-center my-10 text-primary'>
                <h2 className='text-3xl style '>All Toys are Here {toys.length}</h2>
                <hr className='w-1/3' />
            </div>
            {/* search */}
            <div className='flex flex-col space-y-5 items-center rounded-none my-24'>
                <input type="search" required name='search' placeholder='search' onChange={(e) => setSearchTerm(e.target.value)} className="input input-bordered w-1/3" />
                <button className='btn'>Search</button>
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
                        slice?.filter((toy) => toy.toyName.toLowerCase().includes(searchTerm)).map(toy => <Toy
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
                <button onClick={() => seeMoreHandle()} className='btn w-1/2'>See More</button>
            </div>
        </div>
    );
};

export default AllToys;