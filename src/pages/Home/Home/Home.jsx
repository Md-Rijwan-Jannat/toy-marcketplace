import Banner from "../Banner/Banner";
import Categories from "../CategoryToys/Categories";
import Reviews from "../../../shared/CustomerReview/Reviews";
import Container from "../../../components/container/Container";
import { Informations } from "../Informations/Informations";
import { Gallery } from "../../../shared/Gallery/Gallery";

const Home = () => {
  return (
    <div className="m-0">
      <Banner></Banner>
      <Container>
        <Gallery></Gallery>
        <Categories></Categories>
        <Informations></Informations>
        <Reviews></Reviews>
      </Container>
    </div>
  );
};

export default Home;
