import React, { useEffect } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
 import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Container from '../../components/hooks/container/Container';
import toy_logo from '../../assets/toy-logo-removebg-preview.png'
import { useState } from 'react';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
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

      useEffect(() => {
        const openMenu = () => {
          const menu = document.querySelector('.navbar-menu');
          if (menu) {
            menu.classList.remove('hidden');
          }
        };
    
        const closeMenu = () => {
          const menu = document.querySelector('.navbar-menu');
          if (menu) {
            menu.classList.add('hidden');
          }
        };
    
        const burger = document.querySelectorAll('.navbar-burger');
        if (burger.length) {
          for (let i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', openMenu);
          }
        }
    
        const close = document.querySelectorAll('.navbar-close');
        if (close.length) {
          for (let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', closeMenu);
          }
        }
    
        const backdrop = document.querySelectorAll('.navbar-backdrop');
        if (backdrop.length) {
          for (let i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', closeMenu);
          }
        }
    
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
      console.log('Scroll event triggered:', isScrolled);
      
  return (
    <React.Fragment>
    <Container>
    <div className='relative w-full'>
  <nav className={`max-w-[1400px] mx-auto px-4 py-7 flex justify-between items-center fixed w-full z-[999] ${isScrolled ? 'scrolled-background' : ''}`}>
        <a className="text-3xl font-bold leading-none" href="#">
        <img className='w-[60px] md:w-[140px] h-fit rounded-3xl' src={toy_logo} alt="" />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-rose-600 p-3">
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li><NavLink className={({ isActive }) => isActive ? "text-sm text-rose-600 font-bold mx-3 border-b-2 border-rose-500 uppercase" : "uppercase mx-3 hover:border-b-2 border-rose-500 text-sm text-gray-900 hover:text-gray-950"} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-sm text-rose-600 font-bold mx-3 border-b-2 border-rose-500 uppercase" : "uppercase mx-3 hover:border-b-2 border-rose-500 text-sm text-gray-900 hover:text-gray-950"} to={'/allToys'}>All-Toys</NavLink></li>
        {
            user && <>
                <li><NavLink className={({ isActive }) => isActive ? "text-sm text-rose-600 font-bold mx-3 border-b-2 border-rose-500 uppercase" : "uppercase mx-3 hover:border-b-2 border-rose-500 text-sm text-gray-900 hover:text-gray-950"} to={`/myToys/${user?.email}`}>My Toys</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "text-sm text-rose-600 font-bold mx-3 border-b-2 border-rose-500 uppercase" : "uppercase mx-3 hover:border-b-2 border-rose-500 text-sm text-gray-900 hover:text-gray-950"} to={'/addToy'}>Add A Toy</NavLink></li>
                
            </>
        }
         <li><NavLink className={({ isActive }) => isActive ? "text-sm text-rose-600 font-bold mx-3 border-b-2 border-rose-500 uppercase" : "uppercase mx-3 hover:border-b-2 border-rose-500 text-sm text-gray-900 hover:text-gray-950"} to={'/blogs'}>Blogs</NavLink></li>
        </ul>
        {
            user? <NavLink to={'login'}className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200" onClick={logOutHandler} >Logout</NavLink>:  <NavLink to="/signin" className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200">
            Sign In
          </NavLink>
        }
       
        <NavLink to="/register" className="hidden lg:inline-block py-2 px-6 bg-rose-500 hover:bg-rose-600 text-sm text-white font-bold rounded-xl transition duration-200">
          Sign Up
        </NavLink>
      </nav>
  </div>
    </Container>
      <div className="navbar-menu relative z-[999] hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
            <img className='w-[60px] md:w-[140px] h-fit rounded-3xl' src={toy_logo} alt="" />
            </a>
            <button className="navbar-close">
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <NavLink to="/" className="block p-4 text-sm font-semibold text-gray-400 hover:bg-rose-50 hover:text-rose-600 rounded uppercase">
                  Home
                </NavLink>
              </li>
              <li><NavLink className="block p-4 text-sm font-semibold text-gray-400 hover:bg-rose-50 hover:text-rose-600 rounded uppercase" to={'/allToys'}>All-Toys</NavLink></li>
        {
            user && <>
                <li><NavLink className="block p-4 text-sm font-semibold text-gray-400 hover:bg-rose-50 hover:text-rose-600 rounded uppercase" to={`/myToys/${user?.email}`}>My Toys</NavLink></li>
                <li><NavLink className="block p-4 text-sm font-semibold text-gray-400 hover:bg-rose-50 hover:text-rose-600 rounded uppercase" to={'/addToy'}>Add A Toy</NavLink></li>
            </> 
               
        }
        <li><NavLink className="block p-4 text-sm font-semibold text-gray-400 hover:bg-rose-50 hover:text-rose-600 rounded uppercase" to={'/blogs'}>Blogs</NavLink></li>
            </ul>
            <div className="mt-6">
                {
                user ?  <li><NavLink to={'login'} className="block py-2 px-4 bg-gray-50 text-sm text-gray-900 font-semibold rounded transition duration-200 hover:bg-gray-100" onClick={logOutHandler} >Logout</NavLink></li> :
                <li><NavLink className="block py-2 px-4 bg-gray-50 text-sm text-gray-900 font-semibold rounded transition duration-200 hover:bg-gray-100" to={'/login'}>Sign In</NavLink></li>
            }
              <NavLink to="/register" className="block mt-2 py-2 px-4 bg-rose-500 text-sm text-white font-semibold rounded transition duration-200 hover:bg-rose-600">
                Sign Up
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
