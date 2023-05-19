import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Toys = ({ toy }) => {
    useEffect(() => { Aos.init() }, [])
    const { _id, toyName, sellerName, email, category, price, rating, quantity, photo, description } = toy;
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }
                    })

                    .catch(error => console.log(error))
            }
        })
    }

    const handleUpdate = (_id, event) => {
        event.preventDefault();
        const form = event.target;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        const updateInfo = {
            quantity, price, description
        }
        console.log(updateInfo)
    }
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
                    <button className="btn btn-block style my-10">Update</button>
                </th>
            </tr>
        </tbody>
    );
};

export default Toys;