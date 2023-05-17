import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const routes = <>
        <li><Link className='font-semibold' to={'/'}>Home</Link></li>
        <li><Link className='font-semibold' to={'/allToys'}>All Toys</Link></li>
        <li><Link className='font-semibold' to={'/blogs'}>Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-base-200 border rounded-b-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {routes}
                    </ul>
                </div>
                <img className='w-[150px] h-[150px]' src="https://cdn.shopify.com/s/files/1/0034/9995/0129/files/logo_final-01_copy_876e5cdd-627f-4f27-8a0e-e7601e80e7b9_1200x1200.png?v=1634924327" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {routes}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;