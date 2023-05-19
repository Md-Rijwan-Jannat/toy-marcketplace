import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 

const Toy = ({ toy }) => {
    useEffect(() => {
        Aos.init()
    }, [])
    const { _id, toyName, sellerName, email, category, price, rating, quantity, photo, description } = toy;
    return (
        <tbody className='border-b'>
            {/* row 1 */}
            <tr>
                <th>
                    <input type="checkbox" className="checkbox" />
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
                <td className='text-yellow-500'>{'$'+price}</td>
                <td className='text-orange-500'>{quantity}</td>

                <th>
                    <Link to={`/details/${_id}`} className="btn bg-green-500 hover:bg-green-400 border-none">View details</Link>
                </th>
            </tr>
        </tbody>
    );
};

export default Toy;

