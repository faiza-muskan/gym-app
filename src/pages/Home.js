import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Review from "../components/Review";
import Download from "../components/Download";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container sm:mx-640px md:mx-640px lg:mx-640px py-4 px-12">
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
