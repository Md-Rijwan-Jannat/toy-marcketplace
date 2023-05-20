import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaAngleRight } from 'react-icons/fa';

const Toy = ({ toy }) => {
    useEffect(() => {
        Aos.init()
    }, [])


        const { _id, toyName, sellerName, email, category, price, rating, quantity, photo, description } = toy;
    return (
        <tbody data-aos="fade-up" className='border-b'>
            {/* row 1 */}
            <tr>
                <th>
                   <FaAngleRight></FaAngleRight>
                </th>
                <td>
                    <div className="w-24 h-24">
                        <img className='rounded-xl' src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </td>
                <td className='font-bold'>
                    {toyName}
                </td>
                <td>{sellerName}</td>
                <td className='text-red-500'>{category}</td>
                <td className='text-yellow-500'>{'$' + price}</td>
                <td className='text-orange-500'>{quantity}</td>

                <th>
                    <Link to={`/details/${_id}`} className="btn bg-green-500 hover:bg-green-400 border-none">View details</Link>
                </th>
            </tr>
        </tbody>
    );
};

export default Toy;

