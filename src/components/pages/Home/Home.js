import Article from "../../views/Article/Article";
import Hero from "../../views/Hero/Hero";
import FeaturedBlends from "../FeaturedBlends/FeaturedBlends";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const Home = () => {
    return (
        <>
            <Hero/>
            <FeaturedProducts/>
            <Article/>
            <FeaturedBlends/>
        </>
        
      );
}
 
export default Home;
