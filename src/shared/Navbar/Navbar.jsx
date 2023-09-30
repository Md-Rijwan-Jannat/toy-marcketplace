import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import toy_logo from '../../assets/toy-logo-removebg-preview.png'
import { FaUser } from 'react-icons/fa';
import Container from '../../components/hooks/container/Container';

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
        <li><NavLink className={({ isActive }) => isActive ? "border-b border-gray-800 px-4 py-1" : "font-semibold px-4 py-1 hover:border-b border-gray-800 mx-5 "} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "border-b border-gray-800 px-4 py-1" : "font-semibold px-4 py-1 hover:border-b border-gray-800 mx-5 "} to={'/allToys'}>Toys</NavLink></li>
        {
            user ? <>
                <li><NavLink className={({ isActive }) => isActive ? "border-b border-gray-800 px-4 py-1" : "font-semibold px-4 py-1 hover:border-b border-gray-800 mx-5 "} to={`/myToys/${user?.email}`}>My Toys</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "border-b border-gray-800 px-4 py-1" : "font-semibold px-4 py-1 hover:border-b border-gray-800 mx-5 "} to={'/addToy'}>Add A Toy</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "border-b border-gray-800 px-4 py-1" : "font-semibold px-4 py-1 hover:border-b border-gray-800 mx-5 "} onClick={logOutHandler} >Logout</NavLink></li>
            </> :
                <li><NavLink className={({ isActive }) => isActive ? "border-b border-gray-800 px-4 py-1" : "font-semibold px-4 py-1 hover:border-b border-gray-800 mx-5 "} to={'/login'}>Login</NavLink></li>
        }

        <li><NavLink className={({ isActive }) => isActive ? "border-b border-gray-800 px-4 py-1" : "font-semibold px-4 py-1 hover:border-b border-gray-800 mx-5 "} to={'/blogs'}>Blogs</NavLink></li>

    </>
    return (
        <div className=" bg-base-200 bg-opacity-20 fixed z-50 w-full">
            <Container>
              <div className='navbar h-14 md:h-24 lg:h-28 w-full rounded-b-lg'> 
              <div className="navbar-start">
                    {/* <div className="">
                    <label tabIndex={0} className="btn btn-ghost ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </div> */}
                    <div className='flex gap-2 md:flex-col md:my-2'>
                        <img className='w-[60px] md:w-[140px] h-fit rounded-3xl' src={toy_logo} alt="" />
                    </div>
                </div>
                <div className='navbar-end'>
                    <div className="hidden lg:flex">
                        <ul className="flex flex-row w-full gap-5 px-1 text-yellow-500">
                            {routes}
                        </ul>
                    </div>
                    <div className=' dropdown dropdown-left dropdown-bottom  w-24 h-24 relative'>
                        <label tabIndex={0} className=" w-24 h-24 flex items-center justify-end mr-4">
                            {
                                user ? <img className='rounded-full w-16 h-16' src={user?.photoURL} alt="" /> : <FaUser size={30} className='hover:bg-gray-200 p-1 rounded-full' />
                            }
                        </label >
                        <ul tabIndex={0} className="lg:hidden absolute top-[20] space-y-3 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {routes}
                        </ul>
                    </div>
                </div>
              </div>
            </Container>
        </div>
    );
};

export default Navbar;