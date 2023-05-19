import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const logOutHandler = () => {
        logOut()
            .then(result => {
                console.log(result);
                toast.success("Successfully log out");
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message);
            })
    }
    const routes = <>
        <li><Link className='font-semibold' to={'/'}>Home</Link></li>
        <li><Link className='font-semibold' to={'/allToys'}>All Toys</Link></li>
        {
            user ? <>
                <li><Link className='font-semibold' to={`/myToys/${user?.email}`}>My Toys</Link></li>
                <li><Link className='font-semibold' to={'/addToy'}>Add A Toy</Link></li>
                <li><Link className='font-semibold' onClick={logOutHandler} >Logout</Link></li>
            </> :
                <li><Link className='font-semibold' to={'/login'}>Login</Link></li>
        }

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
                <div className='flex gap-2 md:flex-col my-2'>
                    <img className='w-[150px] h-[100px] rounded-3xl' src="https://i.pinimg.com/736x/64/6b/f2/646bf2610a7883197908aeb33d1ad783.jpg" alt="" />
                    <div className='mt-2'>
                        <h2 className= 'font-bold text-lg md:text-xl style'>Toy sports Cars</h2>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {routes}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.photoURL ? <img className='rounded-full' src={user?.photoURL} alt="" /> : <img className='rounded-full w-16 h-16' src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="" />
                }
            </div>
        </div>
    );
};

export default Navbar;