import React, { useEffect, useState } from 'react';
import Toy from './Toy';
import Aos from 'aos';
import 'aos/dist/aos.css'

const AllToys = () => {
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
    return (
        <div>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='flex flex-col items-center my-10 text-primary'>
                <h2 className='text-3xl style '>All Toys are Here {toys.length}</h2>
                <hr className='w-1/3' />
            </div>
                    <div className="overflow-x-auto md:overflow-hidden w-full mt-5 mb-10">
                        <table className="table w-full">
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
                    </div>
        </div>
    );
};

export default AllToys;