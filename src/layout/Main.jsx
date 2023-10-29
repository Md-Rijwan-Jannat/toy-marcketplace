import { useState, useEffect } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Loader2 } from '../components/hooks/container/loader/Loader2';

const Main = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Use setTimeout to hide the loader after 2 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {
        showLoader ? <Loader2/> : <>
        <Navbar />
      <Outlet />
      <Footer />
        </>
      }
    </div>
  );
};

export default Main;
