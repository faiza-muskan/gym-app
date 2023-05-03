import Hero from "../components/homePage/Hero";
import About from "../components/homePage/About";
import Menu from "../components/menu/Menu";
import Review from "../components/homePage/Review";
import Download from "../components/homePage/Download";
import Footer from "../components/homePage/Footer";

const Home = () => {
  return (
    <div className="container py-4 px-12">
      <Hero />
      <About />
      <Menu />
      <Review />
      <Download />
      <Footer />
    </div>
  );
};

export default Home;
