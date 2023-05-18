import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero my-10md:my-28">
                <form className="card-body m-5 my-5 border rounded">
                <h2 className='text-2xl font-bold mb-5 text-inherit'>Login</h2>
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
                        <button className="btn btn-text-inherit">Login</button>
                    </div>
                    <p className='text-center my-5'>You don't have a account? <Link className='text-blue-500 font-bold' to={'/register'}>Please register</Link></p>
                </form>
            </div>
    );
};

export default Login;