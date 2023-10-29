import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from './Category';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Loader } from '../../../components/hooks/container/loader/Loader';

const Categories = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Initialize with the default active tab index
  const [showMoreCount, setShowMoreCount] = useState(9); // Set a default of 9 items to show

  useEffect(() => {
    Aos.init();
  }, []);

  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch('https://toys-marketplace-server-agmt-11.vercel.app/toys')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const newCar = toys.filter((item) => item.category === 'new').slice(0, showMoreCount);
  const sportsCar = toys.filter((item) => item.category === 'sports').slice(0, showMoreCount);
  const oldCar = toys.filter((item) => item.category === 'Old').slice(0, showMoreCount);

  const handleSeeMore = () => {
    const newShowMoreCount = showMoreCount + 9;
    setShowMoreCount(newShowMoreCount);
  };

  const handleHide = () => {
    setShowMoreCount(9);
  };

  return (
    <div className='my-24'>
      <Tabs
        selected={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
      >
        <TabList
          data-aos="fade-right"
          data-aos-duration="3000"
          className="flex w-full justify-center gap-2 md:mb-10"
        >
          <Tab
            className={`text-white p-4 rounded bg-rose-500 shadow-md flex items-center justify-center md:px-24 ${
              selectedTab === 0 ? 'active' : ''
            }`}
          >
            New cars
          </Tab>
          <Tab
            className={`text-white p-4 rounded bg-rose-500 shadow-md flex items-center justify-center md:px-24 ${
              selectedTab === 1 ? 'active' : ''
            }`}
          >
            Sports cars
          </Tab>
          <Tab
            className={`text-white p-4 rounded bg-rose-500 shadow-md flex items-center justify-center md:px-24 ${
              selectedTab === 2 ? 'active' : ''
            }`}
          >
            Old cars
          </Tab>
        </TabList>

        <TabPanel>
           {
            !newCar.length == 0 ? <> 
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 md:p-10'>
             {newCar.map((category) => (
              <Category key={category._id} category={category} />
            ))}
          </div>
            </>: <Loader/>
           }
          {newCar.length < toys.filter((item) => item.category === 'new').length && (
            <button
              className='text-rose-500 border border-rose-500 rounded-full px-4 py-2 mx-auto block mt-4'
              onClick={handleSeeMore}
            >
              See More
            </button>
          )}
          {showMoreCount > 9 && (
            <button
              className='text-rose-500 border border-rose-500 rounded-full px-4 py-2 mx-auto block mt-4'
              onClick={handleHide}
            >
              Hide
            </button>
          )}
        </TabPanel>

        <TabPanel>
        {
            !sportsCar.length == 0 ? <> 
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 md:p-10'>
             {sportsCar.map((category) => (
              <Category key={category._id} category={category} />
            ))}
          </div>
            </>: <Loader/>
           }
          {sportsCar.length < toys.filter((item) => item.category === 'sports').length && (
            <button
              className='text-rose-500 border border-rose-500 rounded-full px-4 py-2 mx-auto block mt-4'
              onClick={handleSeeMore}
            >
              See More
            </button>
          )}
          {showMoreCount > 9 && (
            <button
              className='text-rose-500 border border-rose-500 rounded-full px-4 py-2 mx-auto block mt-4'
              onClick={handleHide}
            >
              Hide
            </button>
          )}
        </TabPanel>

        <TabPanel>
        {
            !oldCar.length == 0 ? <> 
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 md:p-10'>
             {oldCar.map((category) => (
              <Category key={category._id} category={category} />
            ))}
          </div>
            </>: <Loader/>
           }
          {oldCar.length < toys.filter((item) => item.category === 'Old').length && (
            <button
              className='text-rose-500 border border-rose-500 rounded-full px-4 py-2 mx-auto block mt-4 hover:bg-rose-500 w-[150px] hover:text-white'
              onClick={handleSeeMore}
            >
              See More
            </button>
          )}
          {showMoreCount > 9 && (
            <button
              className='text-rose-500 border border-rose-500 rounded-full px-4 py-2 mx-auto block mt-4 hover:bg-rose-500 w-[150px] hover:text-white'
              onClick={handleHide}
            >
              Hide
            </button>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
