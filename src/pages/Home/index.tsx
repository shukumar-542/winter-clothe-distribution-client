import AboutUs from "./AboutUs";
import Benificial from "./Benificial";
import Donors from "./Donors";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import Volunteers from "./Volunteers";
import WinterClothes from "./WinterClothes";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <WinterClothes />
            <Donors />
            <Gallery />
            <AboutUs />
            <Volunteers />
            <Benificial />
        </div>
    );
};

export default Home;