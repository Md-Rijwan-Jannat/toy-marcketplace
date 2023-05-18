import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import Google from '../../shared/GoogleProvider/Google';

const Register = () => {
    const [show, setShow] =useState(false)
    const { registerUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)

        registerUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                console.log(registeredUser);
                form.reset('')
                toast.success("Successfully register");
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message);
            })
    }
    return (
            <div className="w-full flex flex-col items-center mb-24">
                <div className="flex justify-center items-center md:w-1/2">
                    <img className='w-full md:w-[25em]' src="https://img.freepik.com/premium-vector/sign-account-user-authorization-login-authentication-page-concept-laptop-with-login-password-form-page-screen-stock-illustration_100456-1590.jpg" alt="" />
                </div>
                <form onSubmit={handleRegister} className="md:w-1/2">
                    <div className="card-body border rounded-lg shadow-xl">
                        <h2 className='text-2xl font-bold mb-5 text-primary'>Register Please</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold"> User Name</span>
                            </label>
                            <input name='name' required type="text" placeholder="user name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input name='email' required type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input name='password' required type={show?"password" : "text"} placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <span href="#" onClick={()=>setShow(!show)} className="label-text-alt link link-hover font-bold">{
                                    show ?  <p>Show password</p>: <p>Hide password</p>
                                }</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <input name='photo' required type="link" placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className='text-center my-5'>You have a account? <Link className='text-primary font-bold' to={'/login'}>Please login</Link></p>
                    </div>
                        <Google></Google>
                </form>
            </div>
    );
};

export default Register;