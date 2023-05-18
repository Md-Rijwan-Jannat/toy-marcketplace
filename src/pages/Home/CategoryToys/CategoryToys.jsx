import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryToys = () => {
    return (
        <div className='my-24 flex flex-col items-center bg-slate-100 py-5'>
            <Tabs>
                <TabList className="flex mb-10">
                    <Tab className="text-lg bg-purple-200 m-3 rounded-xl w-32 p-5">New cars</Tab>
                    <Tab className="text-lg bg-purple-200 m-3 rounded-xl w-32 p-5">Sports cars</Tab>
                    <Tab className="text-lg bg-purple-200 m-3 rounded-xl w-32 p-5">Old cars</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryToys;