import React from 'react';

const AddToys = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center w-full my-10'>
                <h2 className='text-3xl style'>Add a Toys</h2>
                <hr className='w-1/3' />
            </div>
            <from className='w-full mb-16 space-y-3'>


                {/* row1 */}
                <div className='md:flex items-center  gap-5 full'>
                    <div className='space-y-2 font-bold w-1/2'>
                        <h3>Toy name</h3>
                        <input type="text" required name='toyName' placeholder="Toy name" className="input input-bordered w-full" />
                    </div>
                    <div className='space-y-2 font-bold w-1/2'>
                        <h3>Seller name</h3>
                        <input type="link" required name='sellerName' placeholder="Seller name" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row2 */}
                <div className='md:flex items-center  gap-5 full'>
                    <div className='space-y-2 font-bold w-1/2'>
                        <h3>Email</h3>
                        <input type="email" required name='email' placeholder="Email" className="input input-bordered w-full" />
                    </div>
                    <div className='space-y-2 font-bold w-1/2'>
                        <h3>Category</h3>
                        <input type="text" required name='category' placeholder="Sub category" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row3 */}
                <div className='md:flex items-center  gap-5 full'>
                    <div className='space-y-2 font-bold w-1/2'>
                        <h3>Price</h3>
                        <input type="text" required name='price' placeholder="Toy price" className="input input-bordered w-full" />
                    </div>
                    <div className='space-y-2 font-bold w-1/2'>
                        <h3>Rating</h3>
                        <input type="text" required name='rating' placeholder="Rating" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row4 */}
                <div className='md:flex items-center  gap-5 full'>
                    <div className='space-y-2 font-bold w-1/2'>
                        <h3>Quantity</h3>
                        <input type="text" required name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
                    </div>
                    <div className='space-y-2 font-bold w-1/2'>
                        <h3>Photo</h3>
                        <input type="link" required placeholder="Photo URL" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row 5 */}
                <div className='md:flex items-center justify-center gap-5 full'>
                    <div className='space-y-2 font-bold w-1/2'>
                        <h3 className='text-center'>Description</h3>
                        <textarea type="text" required name='name' placeholder="description" className="textarea textarea-bordered w-full" />
                    </div>
                </div>
                <button className='btn btn-block style my-10'>Add A Toy</button>


            </from>
        </div>
    );
};

export default AddToys;