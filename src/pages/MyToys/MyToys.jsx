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

    // delete
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
                fetch(`https://toys-marketplace-server-agmt-11.vercel.app/toys/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        console.log(updatedToyInfo);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted!.',
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
                                    handleDelete={handleDelete}
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