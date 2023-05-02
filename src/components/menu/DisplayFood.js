import React from "react";
import MenuItem from "./MenuItem";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-[#EB0029] rounded-full mx-3 p-8 hover:bg-[#8c0c22] absolute top-[-115px] right-0`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <HiOutlineChevronRight className=" text-white z-10 text-4xl absolute top-4 left-4" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-[#EB0029] rounded-full mx-3 p-8 hover:bg-[#8c0c22] absolute top-[-115px] left-[590px]`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <HiOutlineChevronLeft className=" text-white z-10 text-4xl absolute top-4 left-4" />
    </div>
  );
}

const price = 20;

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
        <MenuItem
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
