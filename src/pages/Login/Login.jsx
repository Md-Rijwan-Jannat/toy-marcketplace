import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col justify-around lg:flex-row-reverse w-full">
                <div className="flex flex-col justify-center items-center lg:text-left md:w-1/">
                    <h2 className='text-4xl style text-secondary md:w-1/2'><span className='text-primary'>Login</span> our toy sports <span className='text-primary'>car site</span></h2>
                    <img className='w-64' src="https://static.vecteezy.com/system/resources/previews/013/923/543/original/blue-car-logo-png.png" alt="" />
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 md:w-1/2 max-w-sm bg-base-100">
                    <div className="card-body border rounded">
                        <h2 className='text-2xl font-bold mb-5 text-primary'>Login</h2>
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
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                        <p className='text-center my-5'>You don't have a account? <Link className='text-blue-500 font-bold' to={'/register'}>Please register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;