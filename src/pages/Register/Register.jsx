import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)
    }
    return (
        <div>
            <div className='text-center style bg-purple-100 rounded-xl shadow-2xl p-5 my-10'>
                <h1 className='text-2xl md:text-4xl text-center'>Are you interested our site you can't visited before register. Please register and enjoy</h1>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col justify-around lg:flex-row-reverse w-full">
                    <div className="flex justify-center items-center lg:text-left md:w-1/2">
                        <img className='w-full' src="https://img.freepik.com/premium-vector/sign-account-user-authorization-login-authentication-page-concept-laptop-with-login-password-form-page-screen-stock-illustration_100456-1590.jpg" alt="" />
                    </div>
                    <form onSubmit={handleRegister} className="card flex-shrink-0 md:w-1/2 max-w-sm">
                        <div className="card-body border rounded">
                            <h2 className='text-2xl font-bold mb-5'>Register Please</h2>
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
                                <input name='password' required type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Photo URL</span>
                                </label>
                                <input name='photo' required type="link" placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn">Register</button>
                            </div>
                            <p className='text-center my-5'>You have a account? <Link className='text-blue-500 font-bold' to={'/login'}>Please login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;