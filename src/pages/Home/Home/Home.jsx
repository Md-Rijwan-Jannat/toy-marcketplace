
import Banner from '../Banner/Banner';
import Categories from '../CategoryToys/Categories';
import Gallery from '../../../shared/Gallery/Gallery';
import Reviews from '../../../shared/CustomerReview/Reviews';
import Container from '../../../components/hooks/container/Container';
import { SendMail } from '../SendMail/SendMail';
import { Informations } from '../Informations/Informations';


const Home = () => {
    return (
        <div className='m-0'>
            <Banner></Banner>
            <Container>
                <Gallery></Gallery>
                <Categories></Categories>
                <Informations></Informations>
                <SendMail></SendMail>
                <Reviews></Reviews>
            </Container>
        </div>
    );
};

export default Home;