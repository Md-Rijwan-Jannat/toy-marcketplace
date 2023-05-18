import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Reviews from '../CustomerReview/Reviews';
import Slider from 'react-slick';
import CategoryToys from '../CategoryToys/CategoryToys';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryToys></CategoryToys>
            <Reviews></Reviews>
            <Slider></Slider>
        </div>
    );
};

export default Home;