import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Reviews from '../CustomerReview/Reviews';
import Slider from 'react-slick';
import Categories from '../CategoryToys/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <Reviews></Reviews>
            <Slider></Slider>
        </div>
    );
};

export default Home;