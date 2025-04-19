import Footer from "../../Components/Footer";
import Offer from "./Offer";
import Products from "./Products";
import Slider from "./Slider";

function Homepage() {
  return (
    <div>
      <Slider />
      <Products />
      <Offer />
      <Footer />
    </div>
  );
}

export default Homepage;
