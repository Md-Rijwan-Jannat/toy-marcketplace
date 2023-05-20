import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from './Toys';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    useEffect(() => { Aos.init() }, [])
    const userToysForEmail = useLoaderData();
    return (
        <div>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='flex flex-col items-center my-10 text-primary'>
                <h2 className='text-3xl style '>My all Toys {userToysForEmail.length}</h2>
                <hr className='w-1/3' />
            </div>
            {
                userToysForEmail ? <div className="overflow-x-auto md:overflow-hidden  w-full mt-5 mb-10">
                {
                    user ? <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <th>Delete</th>
                                </th>
                                <th>Photo</th>
                                <th>Toy Name</th>
                                <th>Seller Name</th>
                                <th>You email</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        {
                            userToysForEmail?.map(toy => <Toys
                                key={toy._id}
                                toy={toy}
                            ></Toys>)
                        }

                    </table> : <div className='w-full h-[500px] flex items-center justify-center'>
                        <progress className="progress w-56"></progress>
                    </div>
                }
            </div> : <div className='w-full h-[500px] flex items-center justify-center'>
                        <progress className="progress w-56"></progress>
                    </div>
            }
        </div>
    );
};

export default MyToys;