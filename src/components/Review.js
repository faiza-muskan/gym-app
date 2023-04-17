import React from "react";
import rectangle from "../images/Rectangle 4.png";
import chef from "../images/chef.png";
import Slider from "react-slick";

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToshow: 1,
    slideToScroll: 1,
  };

  return (
    <section className="my-5 px-12 flex flex-row justify-between relative">
      <div className=" mx-5 px-5">
        <img
          className=" absolute w-[330px] top-0"
          src={rectangle}
          alt="rectangle background"
        />
        <img
          className=" absolute w-[420px] h-auto left-11 bottom-[-193px]"
          src={chef}
          alt="chef holding the dish"
        />
      </div>
      <div className=" container text-center w-[50%]">
        <div>
          <h2 className=" text-[#EB0029] font-semibold">What They Say</h2>
          <h1 className=" font-extrabold text-2xl my-2 py-2">
            What Our Customers Say About Us
          </h1>
          <Slider {...settings}>
            <div>
              <p>
                "There are painters who transform the sun to a yellow spot,
                <br /> but there are others who with the help of their art and
                their
                <br />
                intelligence, transform a yellow spot into the sun".
              </p>
            </div>
            <div>
              <p>
                There are painters who transform the sun to a yellow spot,
                <br /> but there are others who with the help of their art and
                their
                <br />
                intelligence, transform a yellow spot into the sun.
              </p>
            </div>
            <div>
              <p>
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
