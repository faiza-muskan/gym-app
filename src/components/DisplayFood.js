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
            <div className="mt-5 mb-2">
              <label className="mr-[1rem]" htmlFor="amount">
                Amount
              </label>
              <input
                className=" border-[1px] border-neutral-300 p-1 rounded-lg"
                type="number"
                min="1"
                max="5"
                step="1"
                defaultValue="1"
              />
            </div>
            <div>
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
