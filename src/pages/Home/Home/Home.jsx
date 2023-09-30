
import Banner from '../Banner/Banner';
import Slider from 'react-slick';
import Categories from '../CategoryToys/Categories';
import Gallery from '../../../shared/Gallery/Gallery';
import Reviews from '../../../shared/CustomerReview/Reviews';
import Container from '../../../components/hooks/container/Container';


const Home = () => {
    return (
        <div className='m-0'>
            <Banner></Banner>
            <Container>
                <Gallery></Gallery>
                <Categories></Categories>
                <Reviews></Reviews>
                <Slider></Slider>
            </Container>
        </div>
    );
};

export default Home;