import Aos from 'aos';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import 'aos/dist/aos.css';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    const toyData = useLoaderData();
    const {_id, price, quantity, description } = toyData
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
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${_id}`, {
                    method: "PATCH",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(updatedToyInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(updatedToyInfo);
                        if (data) {
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
            .catch(error => console.log(error));
    }
    return (
        <div className='m-5'>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='flex flex-col justify-center items-center w-full my-10'>
                <h2 className='text-3xl style'>Update a my Toys</h2>
                <hr className='w-1/3' />
            </div>
            <form data-aos="fade-right"
                data-aos-duration="3000" onSubmit={updateToyHandler} className='w-full mb-16 space-y-3 border p-3 rounded-xl shadow-2xl md:p-10'>
                {/* row1 */}
                <div className='md:flex items-center  gap-5 full'>
                    <div className='space-y-2 font-bold w-full md:w-1/2'>
                        <h3>Price</h3>
                        <input type="number" required name='price'defaultValue={price} className="input input-bordered w-full" />
                    </div>
                    <div className='space-y-2 font-bold w-full md:w-1/2'>
                        <h3>Quantity</h3>
                        <input type="number" required name='quantity' defaultValue={quantity} className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row 2 */}
                <div className='md:flex items-center justify-center gap-5 full'>
                    <div className='space-y-2 font-bold w-full md:w-1/2'>
                        <h3 className='text-center'>Description</h3>
                        <textarea type="text" required name='description' defaultValue={description} className="textarea textarea-bordered w-full" />
                    </div>
                </div>
                <button className='btn btn-block style my-10'>Update A Toy</button>


            </form>
        </div>
    );
};

export default UpdateToy;