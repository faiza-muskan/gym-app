import React from "react";
import bowl from "../images/foodBowl.png";

const Hero = () => {
  return (
    <section>
      <div className="container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-x-12 pt-20 my-20 px-12">
        <div className="flex-1 text-left ">
          <h1 className=" text-6xl font-bold text-gray-900 leading-[65px]">
            Claim Best Offer
            <br /> On Fast{" "}
            <span className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[#EB0029] font-serif">
              Food{" "}
            </span>{" "}
            & <br />
            <span className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[#EB0029] font-serif">
              Restaurants
            </span>
          </h1>
          <p className="my-6 text-lg">
            Our job is to filling your tummy with delicious food
            <br /> and with delicious
          </p>
          <button className="  bg-[#EB0029] text-white px-9 py-4 rounded-full hover:bg-[#750518]">
            Get Started
          </button>
        </div>
        <div>
          <img className=" w-[669px] h-auto" src={bowl} alt="food" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
