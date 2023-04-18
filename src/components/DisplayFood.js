import React from "react";
import Slider from "react-slick";

const DisplayFood = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  console.log(props.displayData);

  return (
    <Slider {...settings}>
      {props.displayData.map((items) => (
        <div key={items.id} className="border shadow-lg rounded-lg">
          <img
            src={items.image}
            alt={items.title}
            className="w-[300px] h-[300px] rounded-xl"
          />
          <div className="px-2 py-4">
            <h1 className="text-xl font-semibold">{items.title}</h1>
            <p>£20</p>
            <div className="mt-6">
              <button className=" bg-[#eb0029] py-2 px-6 rounded-full text-white ">
                Order now
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default DisplayFood;
