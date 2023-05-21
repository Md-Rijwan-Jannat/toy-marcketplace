import Aos from 'aos';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import 'aos/dist/aos.css';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const UpdateToy = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    const toyData = useLoaderData();
    const { _id, price, quantity, description } = toyData
    const updateToyHandler = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatedToyInfo = { price, quantity, description }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toys-marketplace-server-agmt-11.vercel.app/update-toy/${_id}`, {
                    method: "PATCH",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(updatedToyInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        console.log(updatedToyInfo);
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Updated!',
                                'Your toy has been updated.',
                                'success'
                            )

                        }
                    })

                    .catch(error => console.log(error))
            }
        })
            .catch(error => console.log(error));
    }
    return (
        <div className='m-5 bg-neutral-focus bg-opacity-10 text-gray-500 rounded-3xl p-10'>
            <Helmet><title>Update toy</title></Helmet>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='flex flex-col justify-center items-center w-full my-10'>
                <h2 className='text-3xl style text-primary'>Update a my Toys</h2>
                <hr className='w-1/3' />
            </div>
            <form data-aos="fade-right"
                data-aos-duration="3000" onSubmit={updateToyHandler} className='w-full mb-16 space-y-3 border p-3 rounded-xl shadow-2xl md:p-10'>
                {/* row1 */}
                <div className='md:flex items-center  gap-5 full'>
                    <div className='space-y-2 font-bold w-full md:w-1/2'>
                        <h3>Price</h3>
                        <input type="number" required name='price' defaultValue={price} className="input input-bordered w-full text-gray-500" />
                    </div>
                    <div className='space-y-2 font-bold   md:w-1/2'>
                        <h3>Quantity</h3>
                        <input type="number" required name='quantity' defaultValue={quantity} className="input input-bordered w-full text-gray-500" />
                    </div>
                </div>
                {/* row 2 */}
                <div className='md:flex items-center justify-center gap-5 mb-10'>
                    <div className='space-y-2 font-bold w-full md:w-1/2'>
                        <h3 className='text-center'>Description</h3>
                        <textarea type="text" required name='description' defaultValue={description} className="textarea textarea-bordered w-full text-gray-500" />
                    </div>
                </div>
                <button className='btn btn-primary btn-block style'>Update A Toy</button>
            </form>
        </div>
    );
};

export default UpdateToy;