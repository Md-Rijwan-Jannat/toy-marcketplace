import React from 'react';
import { toast } from 'react-hot-toast';

const AddToys = () => {
    const addToyHandler = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const toysAllInfo = {
            toyName, sellerName, email, category, price, rating, quantity, photo, description
        }
        console.log(toysAllInfo);
        fetch('http://localhost:5000/toys',{
            method: "POST",
            headers:{"content-type": "application/json"},
            body: JSON.stringify(toysAllInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                toast.success("Successfully added")
            }
        })
        .catch(error => console.log(error));
    }
    return (
        <div className='m-5'>
            <div className='flex flex-col justify-center items-center w-full my-10'>
                <h2 className='text-3xl style'>Add a Toys</h2>
                <hr className='w-1/3' />
            </div>
            <form onSubmit={addToyHandler} className='w-full mb-16 space-y-3 border p-3 rounded-xl shadow-2xl md:p-10'>


                {/* row1 */}
                <div className='md:flex items-center  gap-5 full'>
                    <div className='space-y-2 font-bold w-full md:w-1/2'>
                        <h3>Toy name</h3>
                        <input type="text" required name='toyName' placeholder="Toy name" className="input input-bordered w-full" />
                    </div>
                    <div className='space-y-2 font-bold w-full md:w-1/2'>
                        <h3>Seller name</h3>
                        <input type="link" required name='sellerName' placeholder="Seller name" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row2 */}
                <div className='md:flex items-center  gap-5 full'>
                    <div className='space-y-2 font-bold w-full md:w-1/2'>
                        <h3>Email</h3>
                        <input type="email" required name='email' placeholder="Email" className="input input-bordered w-full" />
                    </div>
                    <div className='space-y-2 font-bold w-full md:w-1/2'>
                        <h3>Category</h3>
                        <input type="text" required name='category' placeholder="Sub category" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row3 */}
                <div className='md:flex items-center  gap-5 full'>
                    <div className='space-y-2 font-bold w-full md:w-1/2'>
                        <h3>Price</h3>
                        <input type="number" required name='price' placeholder="Toy price" className="input input-bordered w-full" />
                    </div>
                    <div className='space-y-2 font-bold w-full md:w-1/2'>
                        <h3>Rating</h3>
                        <input type="text" required name='rating' placeholder="Rating" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row4 */}
                <div className='md:flex items-center  gap-5 full'>
                    <div className='space-y-2 font-bold w-full md:w-1/2'>
                        <h3>Quantity</h3>
                        <input type="number" required name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
                    </div>
                    <div className='space-y-2 font-bold w-full md:w-1/2'>
                        <h3>Photo</h3>
                        <input type="link" required name='photo' placeholder="Photo URL" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* row 5 */}
                <div className='md:flex items-center justify-center gap-5 full'>
                    <div className='space-y-2 font-bold w-full md:w-1/2'>
                        <h3 className='text-center'>Description</h3>
                        <textarea type="text" required name='description' placeholder="description" className="textarea textarea-bordered w-full" />
                    </div>
                </div>
                <button className='btn btn-block style my-10'>Add A Toy</button>


            </form>
        </div>
    );
};

export default AddToys;