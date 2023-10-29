
import { Link } from 'react-router-dom';
import Container from '../../../components/hooks/container/Container';
import { useEffect } from 'react';
import Aos from 'aos';

const Banner = () => {
  useEffect(() => {
    Aos.init();
}, [])
  return (
   <Container>
     <section
      className="relative bg-[url(https://images.unsplash.com/photo-1633169571852-2357d28ed1ff?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat lg:h-[700px] "
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[700px]  md:items-center lg:px-8">
        <div data-aos="fade-right" data-aos-duration="3000"  className="max-w-xl text-center md:text-start ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl lg:whitespace-nowrap">
          Discover the Thrill of Toy Cars
            <span className="block font-extrabold text-rose-700">
              Forever Toys.
            </span>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
          Welcome to our world of toy cars, where excitement and nostalgia collide! Whether you are a passionate collector, a young enthusiast, or someone looking to relive their childhood memories, our website is your gateway to a diverse collection of sports, new, and vintage toy cars. 
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to={'/addToy'}
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </Link>

            <Link
             to={'/addToy'}
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
   </Container>
  );
};

export default Banner;
