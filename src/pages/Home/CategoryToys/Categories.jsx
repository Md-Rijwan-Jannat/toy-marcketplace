import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from './Category';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Categories = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('https://toys-marketplace-server-agmt-11.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const newCar = toys.filter(item => item.category == 'new')
    const sportsCar = toys.filter(item => item.category == 'sports')
    const oldCar = toys.filter(item => item.category == 'Old')


    return (
        <div className='my-24 flex flex-col items-center  rounded-2xl py-24 shadow-md'>
            <Tabs>
                <TabList data-aos="fade-right"
                    data-aos-duration="3000" className="md:flex w-full justify-center mb-10">
                    <Tab className="text-lg bg-purple-200 aria-selected:bg-purple-300 aria-selected:border-2 aria-selected:border-purple-500 m-3 rounded-md md:w-32 px-4 py-2 text-center">New cars</Tab>
                    <Tab className="text-lg bg-purple-200 aria-selected:bg-purple-300 aria-selected:border-2 aria-selected:border-purple-500 m-3 rounded-md md:w-32 px-4 py-2 text-center">Sports cars</Tab>
                    <Tab className="text-lg bg-purple-200 aria-selected:bg-purple-300 aria-selected:border-2 aria-selected:border-purple-500 m-3 rounded-md md:w-32 px-4 py-2 text-center">Old cars</Tab>
                </TabList>

                <TabPanel>
                    {
                        newCar ? (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 md:p-10'>
                                {
                                    newCar.map(category => <Category
                                        key={category._id}
                                        category={category}
                                    ></Category>)
                                }
                            </div>
                        ) : <div className='w-full h-[500px] flex items-center justify-center'>
                            <progress className="progress w-56"></progress>
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        sportsCar ? (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 md:p-10'>
                                {
                                    sportsCar.map(category => <Category
                                        key={category._id}
                                        category={category}
                                    ></Category>)
                                }
                            </div>
                        ) : <div className='h-[500px] flex items-center justify-center w-full'>
                            <progress className="progress w-56"></progress>
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        oldCar ? (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 md:p-10'>
                                {
                                    oldCar.map(category => <Category
                                        key={category._id}
                                        category={category}
                                    ></Category>)
                                }
                            </div>
                        ) : <div className='w-full h-[500px] flex items-center justify-center'>
                            <progress className="progress w-56"></progress>
                        </div>
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Categories;

