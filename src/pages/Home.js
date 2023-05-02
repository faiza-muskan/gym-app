import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/menu/Menu";
import Review from "../components/Review";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Cart from "../components/cart/Cart";

import { useSelector } from "react-redux";

const Home = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const closeCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <div className="container py-4 px-12">
      <Hero />
      {showCart && closeCart && <Cart />}
      <About />
      <Menu />
      <Review />
      <Download />
      <Footer />
    </div>
  );
};

export default Home;
