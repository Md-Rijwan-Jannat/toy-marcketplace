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
        <li><NavLink className={({ isActive }) => isActive ? "border-b border-[#CC2229] px-2 py-1 mx-2 flex items-center font-semibold" : "font-semibold px-2 py-1 hover:border-b border-[#CC2229] mx-2 flex items-center"} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "border-b border-[#CC2229] px-2 py-1 mx-2 flex items-center font-semibold" : "font-semibold px-2 py-1 hover:border-b border-[#CC2229] mx-2 flex items-center"} to={'/allToys'}>Toys</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "border-b border-[#CC2229] px-2 py-1 mx-2 flex items-center font-semibold" : "font-semibold px-2 py-1 hover:border-b border-[#CC2229] mx-2 flex items-center"} to={'/blogs'}>Blogs</NavLink></li>
        {
            user ? <>
                <li><NavLink className={({ isActive }) => isActive ? "border-b border-[#CC2229] px-2 py-1 mx-2 flex items-center font-semibold" : "font-semibold px-2 py-1 hover:border-b border-[#CC2229] mx-2 flex items-center"} to={`/myToys/${user?.email}`}>My Toys</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "border-b border-[#CC2229] px-2 py-1 mx-2 flex items-center font-semibold" : "font-semibold px-2 py-1 hover:border-b border-[#CC2229] mx-2 flex items-center"} to={'/addToy'}>Add A Toy</NavLink></li>
                <li><NavLink to={'login'} className={({ isActive }) => isActive ? "border-b border-[#CC2229] px-2 py-1 mx-2 flex items-center font-semibold" : "font-semibold px-2 py-1 hover:border-b border-[#CC2229] mx-2 flex items-center"} onClick={logOutHandler} >Logout</NavLink></li>
            </> :
                <li><NavLink className={({ isActive }) => isActive ? "border-b border-[#CC2229] px-2 py-1 mx-2 flex items-center font-semibold" : "font-semibold px-4 py-1 hover:border-b border-[#CC2229] mx-2 flex items-center"} to={'/login'}>Login</NavLink></li>
        }

    </>
    return (
        <div className=" bg-base-200 bg-opacity-20 fixed z-50 w-full">
            <Container>
              <div className='navbar h-14 md:h-24 lg:h-28 w-full rounded-b-lg'> 
              <div className="navbar-start w-[200px]">
                    <div className='flex gap-2 md:flex-col md:my-2'>
                        <img className='w-[60px] md:w-[140px] h-fit rounded-3xl' src={toy_logo} alt="" />
                    </div>
                </div>
                <div className='navbar-end w-full flex items-center justify-items-end'>
                    <div className="hidden lg:flex w-full">
                        <ul className="flex flex-row w-full gap-5 px-1 text-black">
                            {routes}
                        </ul>
                    </div>
                    <div className=' dropdown dropdown-left dropdown-bottom  w-24 h-24 relative'>
                        <label tabIndex={0} className=" w-24 h-24 flex items-center justify-end mr-4">
                            {
                                user ? <img className='rounded-full w-[25px] h-[25px]' src={user?.photoURL} alt="" /> : <FaUser size={30} className='hover:bg-gray-200 p-1 rounded-full' />
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