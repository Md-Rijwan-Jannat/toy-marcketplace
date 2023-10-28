import { Link } from "react-router-dom"
import './Informations.css'
import { FaCar } from "react-icons/fa"
import Aos from "aos"
import { useEffect } from "react"


export const Informations = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='flex flex-col justify-center items-center w-full '>
                <h2 className='text-3xl text-primary style flex flex-col items-center'><span>Our shop</span><FaCar className='ml-3 my-5 text-5xl'></FaCar></h2>
                <hr className='w-1/3' />
            </div>
            <section className="dark:bg-gray-800 dark:text-gray-100 font-body">
                <div className="container flex flex-col md:flex-row justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <div className="container">
                            <h1 className="title">eFuse</h1>
                            <h1 className="title title-large">eFuse</h1>
                            <div id="img-1" className="img-container">
                                <img className="img" src="https://images.unsplash.com/photo-1510799221123-954eaf8a2ed6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                            </div>

                            <div className="img-container second-animation">
                                <img className="img" src="https://images.unsplash.com/photo-1515281239448-2abe329fe5e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1493&q=80" />
                            </div>

                            <div className="img-container third-animation">
                                <img className="img" src="https://images.unsplash.com/photo-1545609904-f2f11654638d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1329&q=80" />
                            </div>

                            <div className="img-container fourth-animation">
                                <img className="img nba" src="https://media.istockphoto.com/id/521383450/photo/vintage-toy-cars.jpg?s=612x612&w=0&k=20&c=n33d5-HCJbQeaILvJ88neSl7Fsm6IDxIHLurQef8zBM=" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl">Toy Land
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">123 Main Street, Demo City, Bangladesh. Please note that this is a fictional
                            <br className="hidden md:inline lg:hidden" /> location created for demonstration purposes and does not represent an actual toy shop in Bangladesh.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:bg-gray-300 focus:bg-gray-300">Location</Link>
                            <Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:bg-gray-300 focus:bg-gray-300">Contacts</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
