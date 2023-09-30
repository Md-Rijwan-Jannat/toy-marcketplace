import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Reviews from '../../shared/CustomerReview/Reviews';
import { Helmet } from 'react-helmet';
import Container from '../../components/hooks/container/Container';
import { Rating } from 'react-simple-star-rating'
import './Details.css'
import useToys from '../../components/hooks/useToys';

const Details = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    const toyDetails = useLoaderData();
    console.log(toyDetails);
    const { photo, toyName, sellerName, quantity, category, price, rating: toy_rate, description, email } = toyDetails;
    const [toys] = useToys();
    const related_toys = toys.filter(data => data.category === category);
    console.log(related_toys)
    return (
        <Container>
            <div>
                <Helmet><title>Toys details</title></Helmet>
                <div data-aos="fade-right"
                    data-aos-duration="3000" className='grid grid-cols-1 items-center px-5 md:p-16 py-24  md:flex-row-reverse'>
                    <section className="details-body p-5 md:p-10 mt-20 rounded border dark:bg-gray-800 dark:text-gray-100">
                        <div className="container flex flex-col mx-auto gap-y-5 md:gap-10">
                            <div className='flex gap-5'>
                                <div className="flex flex-col w-1/3 justify-between col-span-12 py-2 space-y-8 md:space-y-8 md:col-span-3">
                                    <div className="flex flex-col space-y-3 md:space-y-5">
                                        <div className="flex flex-col space-y-2">
                                            <div className='flex gap-3 items-center'>
                                                <h3 className="flex items-center dark:text-gray-400">
                                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                                    <span className="text-xs font-bold tracki uppercase">Name of toy:</span>
                                                </h3>
                                                <Link rel="noopener noreferrer" href="#" className="font-serif mb-[6px]">
                                                    {toyName}
                                                </Link>
                                            </div>
                                            <p className="text-xs ml-2 dark:text-gray-400 text-start">{description}
                                                <Link rel="noopener noreferrer" href="#" className="dark:text-violet-400"> Leroy Jenkins</Link>
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className='flex gap-3 items-center'>
                                                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                                    <span className="text-xs font-bold tracki uppercase">Type of toy:</span>
                                                </h3>
                                                <Link rel="noopener noreferrer" href="#" className="font-serif mb-[3px]">{category}</Link>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className='flex gap-3 items-center'>
                                                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                                    <span className="text-xs font-bold tracki uppercase">Toy quantity:</span>
                                                </h3>
                                                <Link rel="noopener noreferrer" href="#" className="font-serif mb-[6px]">{quantity}-</Link>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className='flex gap-3 items-center'>
                                                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                                    <span className="text-xs font-bold tracki uppercase">Price:</span>
                                                </h3>
                                                <Link rel="noopener noreferrer" href="#" className="font-serif mb-[1px]">{'$' + price}</Link>
                                            </div>
                                        </div>
                                        <div className='App'>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                                    <span className="text-xs font-bold tracki uppercase">Rating:</span>
                                                </h3>
                                                <Rating
                                                    ratingValue={toy_rate}
                                                    stars={toy_rate} // You can change the number of stars as needed
                                                    size={20}
                                                // Set the size of the stars
                                                />
                                            </div>
                                        </div>


                                    </div>
                                    <div className='space-y-2'>
                                        <h4 className='text-lg '>Saller Details -</h4>
                                        <hr className='border border-gray-500' />
                                        <div className="flex flex-col">
                                            <div className='flex gap-3 items-center'>
                                                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                                    <span className="text-xs font-bold tracki uppercase">Name:</span>
                                                </h3>
                                                <Link rel="noopener noreferrer" href="#" className="font-serif mb-[1px]">{sellerName}</Link>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className='flex gap-3 items-center'>
                                                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                                    <span className="text-xs font-bold tracki uppercase">Email:</span>
                                                </h3>
                                                <Link rel="noopener noreferrer" href="#" className="font-serif mb-[1px]">{email}</Link>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className='flex gap-3 items-center'>
                                                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                                    <span className="text-xs font-bold tracki uppercase">Number:</span>
                                                </h3>
                                                <Link rel="noopener noreferrer" href="#" className="font-serif mb-[1px]">{'+880 1*********'}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full space-y-2">
                                        <div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-400">
                                            <div className="w-1/2 h-full dark:bg-violet-400"></div>
                                        </div>
                                        <Link rel="noopener noreferrer" href="#" className="flex items-center justify-between w-full">
                                            <span className="text-xs font-bold tracki uppercase">See more exclusives</span>
                                            <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent dark:text-violet-400">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative w-full flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" style={{ backgroundImage: `url(${photo})` }}>
                                    <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:border-violet-400 dark:text-gray-100">paris, france</span>
                                    <Link className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group dark:via-transparent flex-grow-1 bg-gradient-to-b dark:from-gray-900 dark:to-gray-900">
                                        <span className="flex items-center mb-4 space-x-2 dark:text-violet-400">
                                            <span className="relative flex-shrink-0 w-2 h-2 rounded-full dark:bg-violet-400">
                                                <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping dark:bg-violet-400"></span>
                                            </span>
                                            <span className="text-sm font-bold">Live</span>
                                        </span>
                                        <h1 rel="noopener noreferrer" href="#" className="font-serif text-2xl font-semibold group-dark:text-gray-100">Morbi mattis justo est, ac consectetur dui eleifend vitae. Donec venenatis?</h1>
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden py-2 w-full md:w-1/2 md:mt-10 xl:w-1/3 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                                <div className="mb-8 space-x-5  border-opacity-10 dark:border-violet-400">
                                    <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400">Related toy</button>
                                </div>
                                {
                                    related_toys.map(item => <div key={item._id} className="flex flex-col divide-y divide-gray-700">
                                    <Link to={`/details/${item._id}`} className="flex px-1 py-4 border hover:bg-gray-100 aria-selected:bg-gray-100 focus:bg-gray-100">
                                        <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src={item.photo} />
                                        <div className="flex flex-col flex-grow">
                                            <Link rel="noopener noreferrer" href="#" className="font-serif hover:underline">{item.toyName}</Link>
                                            <p className="mt-auto text-xs dark:text-gray-400">
                                                <Link rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">{item.category}</Link>
                                            </p>
                                        </div>
                                    </Link>
                                </div>)
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Reviews></Reviews>
        </Container >
    );
};

export default Details;