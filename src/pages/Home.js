import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Review from "../components/Review";

const Home = () => {
  return (
    <div className="container sm:mx-640px md:mx-640px lg:mx-640px">
      <Hero />
      <About />
      <Menu />
      <Review />
    </div>
  );
};

export default Home;
