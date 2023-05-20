import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from './Category';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Categories = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    const [categories, setCategory] = useState(null)
    console.log(categories);

    const categoryHandler = category => {
        fetch(`http://localhost:5000/toys/${category}`)
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })
            .catch(error => console.log(error))
    }
    useEffect(() => {
        categoryHandler('new')
    }, [])

    return (
        <div className='my-24 flex flex-col items-center bg-base-200 rounded-2xl py-24 shadow-xl'>
            <Tabs>
                <TabList data-aos="fade-right"
                    data-aos-duration="3000" className="md:flex w-full justify-center mb-10">
                    <Tab onClick={() => categoryHandler('new')} className="text-lg bg-purple-200 m-3 rounded-xl md:w-32 p-5">New cars</Tab>
                    <Tab onClick={() => categoryHandler('sports')} className="text-lg bg-purple-200 m-3 rounded-xl md:w-32 p-5">Sports cars</Tab>
                    <Tab onClick={() => categoryHandler('Old')} className="text-lg bg-purple-200 m-3 rounded-xl md:w-32 p-5">Old cars</Tab>
                </TabList>

                <TabPanel>
                    {
                        categories ? (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 md:p-10'>
                                {
                                    categories.map(category => <Category
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
                        categories ? (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 md:p-10'>
                                {
                                    categories.map(category => <Category
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
                        categories ? (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 md:p-10'>
                                {
                                    categories.map(category => <Category
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