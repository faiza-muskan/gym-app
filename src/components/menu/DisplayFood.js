import React from "react";
import MenuItem from "./MenuItem";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-[#EB0029] rounded-full mx-3 2xl:p-8 xl:p-7 lg:p-6 hover:bg-[#8c0c22] absolute 2xl:top-[-115px] xl:top-[-115px] lg:top-[-115px] `}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <HiOutlineChevronRight className=" text-white z-10 2xl:text-4xl xl:text-3xl lg:text-3xl absolute 2xl:top-4 lg:top-3 2xl:left-4 xl:text-3 lg:left-3" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-[#EB0029] rounded-full mx-3 2xl:p-8 xl:p-7 lg:p-6 hover:bg-[#8c0c22] absolute  2xl:top-[-115px] xl:top-[-115px] lg:top-[-115px] 2xl:left-[780px] xl:left-[620px] lg:left-[470px]`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <HiOutlineChevronLeft className=" text-white z-10 2xl:text-4xl xl:text-3xl lg:text-3xl absolute  2xl:top-4 lg:top-3  lg:left-3" />
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
