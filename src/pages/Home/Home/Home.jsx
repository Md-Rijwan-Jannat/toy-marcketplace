import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Reviews from '../CustomerReview/Reviews';
import Slider from 'react-slick';
import Categories from '../CategoryToys/Categories';
import OurNextShop from '../OurNextShop/OurNextShop';

const Home = () => {
    return (
        <div className='m-0'>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <Reviews></Reviews>
            <Slider></Slider>
            <OurNextShop></OurNextShop>
        </div>
    );
};

export default Home;