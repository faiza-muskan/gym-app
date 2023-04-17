import React from "react";
import chef from "../images/chef.png";
import Slider from "react-slick";

const Review = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#EB0029",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#EB0029",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToshow: 1,
    slideToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="container my-8 py-8 px-12 flex flex-row justify-between items-center">
      <div className=" mx-5 px-5">
        <img
          className=" w-[550px] h-auto"
          src={chef}
          alt="chef holding the dish"
        />
      </div>
      <div className="text-center w-[50%] ">
        <div>
          <h2 className=" text-[#EB0029] font-semibold">What They Say</h2>
          <h1 className=" font-bold text-4xl my-2 py-2">
            What Our Customers <br />
            Say About Us
          </h1>
          <Slider {...settings}>
            <div>
              <p className=" text-xl">
                "There are painters who transform the sun to a yellow spot,
                <br /> but there are others who with the help of their art and
                their
                <br />
                intelligence, transform a yellow spot into the sun".
              </p>
            </div>
            <div>
              <p className=" text-xl">
                There are painters who transform the sun to a yellow spot,
                <br /> but there are others who with the help of their art and
                their
                <br />
                intelligence, transform a yellow spot into the sun.
              </p>
            </div>
            <div>
              <p className=" text-xl">
                There are painters who transform the sun to a yellow spot,
                <br /> but there are others who with the help of their art and
                their
                <br />
                intelligence, transform a yellow spot into the sun.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Review;
