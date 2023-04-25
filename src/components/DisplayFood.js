import React from "react";
import MenuItems from "./MenuItems";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} bg-[#E0E0E0] rounded-full mx-3 p-5 hover:bg-[#a3a3a3]`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <HiOutlineChevronRight />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} bg-[#EB0029] rounded-full mx-3 p-5 text-white hover:bg-[#8c0c22]`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <HiOutlineChevronLeft />
    </button>
  );
}

const price = "£20";

const DisplayFood = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {props.displayData.map((items) => (
        <MenuItems
          title={items.title}
          id={items.id}
          key={items.id}
          image={items.image}
          price={price}
        />
      ))}
    </Slider>
  );
};

export default DisplayFood;
