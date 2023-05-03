import React from "react";
import chef from "../../images/chef.png";
import review1 from "../../images/review-1.avif";
import review2 from "../../images/review-2.avif";
import review3 from "../../images/review-3.avif";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Slider from "react-slick";

const Review = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-[#EB0029] rounded-full mx-3 p-4 hover:bg-[#8c0c22] absolute right-[-40px] top-[45px] `}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      >
        <HiOutlineChevronRight className=" text-white z-10 text-lg absolute top-2 left-2" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-[#EB0029] rounded-full mx-3 p-4 hover:bg-[#8c0c22] absolute left-[-40px] top-[45px]`}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      >
        <HiOutlineChevronLeft className=" text-white z-10 text-lg absolute top-2 left-2" />
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToshow: 1,
    slideToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
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
              <div className="flex flex-row items-center ml-[5rem] mt-10">
                <div className="w-16 h-16 overflow-hidden rounded-full">
                  <img src={review1} alt="profile 1" className="w-auto" />
                </div>
                <div className="ml-4 text-left">
                  <h1 className="text-xl font-semibold"> Theresa Jorden</h1>
                  <h2 className=" text-gray-500">Food Enthusiat</h2>
                </div>
              </div>
            </div>
            <div>
              <p className=" text-xl">
                There are painters who transform the sun to a yellow spot,
                <br /> but there are others who with the help of their art and
                their
                <br />
                intelligence, transform a yellow spot into the sun.
              </p>
              <div className="flex flex-row items-center ml-[5rem] mt-10">
                <div className="w-16 h-16 overflow-hidden rounded-full">
                  <img src={review2} alt="profile 2" className="w-auto" />
                </div>
                <div className="ml-4 text-left">
                  <h1 className="text-xl font-semibold"> Theresa Jorden</h1>
                  <h2 className=" text-gray-500">Food Enthusiat</h2>
                </div>
              </div>
            </div>
            <div>
              <p className=" text-xl">
                There are painters who transform the sun to a yellow spot,
                <br /> but there are others who with the help of their art and
                their
                <br />
                intelligence, transform a yellow spot into the sun.
              </p>
              <div className="flex flex-row items-center ml-[5rem] mt-10">
                <div className="w-16 h-16 overflow-hidden rounded-full">
                  <img src={review3} alt="profile 3" className="w-auto" />
                </div>
                <div className="ml-4 text-left">
                  <h1 className="text-xl font-semibold"> Theresa Jorden</h1>
                  <h2 className=" text-gray-500">Food Enthusiat</h2>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Review;
