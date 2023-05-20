import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const Toys = ({ toy, handleDelete }) => {
    useEffect(() => { Aos.init() }, [])
    const { _id, toyName, sellerName, email, price, quantity, photo } = toy;


    return (
        <tbody data-aos="fade-up" className='border-b'>
            {/* row 1 */}
            <tr>
                <th>
                    <div onClick={() => handleDelete(_id)} className='btn btn-circle bg-red-500 hover:bg-red-400 border-none'>
                        <FaTimes className='w-5 h-5'></FaTimes>
                    </div>
                </th>
                <td>
                    <div className="w-28 h-28">
                        <img className='rounded-xl' src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </td>
                <td className='font-bold'>
                    {toyName}
                </td>
                <td>{sellerName}</td>
                <td className='text-red-500'>{email}</td>
                <td className='text-yellow-500'>{'$' + price}</td>
                <td className='text-orange-500'>{quantity}</td>

                <th>
                    <Link to={`/updateToy/${_id}`} className="btn btn-block style my-10">Update</Link>
                </th>
            </tr>
        </tbody>
    );
};

export default Toys;