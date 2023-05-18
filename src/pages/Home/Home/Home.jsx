import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Reviews from '../CustomerReview/Reviews';
import Slider from 'react-slick';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <Slider></Slider>
        </div>
    );
};

export default Home;