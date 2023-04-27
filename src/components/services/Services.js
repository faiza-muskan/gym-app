import React from "react";
import burger from "../../images/burger.avif";
import chef from "../../images/chef 2.avif";
import delivery from "../../images/delivery (1).avif";
import teamDinner from "../../images/team dinner (1).avif";
import giftCard from "../../images/gift card (1).avif";

const Services = () => {
  return (
    <>
      <div className="relative ">
        <img
          src={burger}
          alt="burger"
          className="w-[100%] h-[35rem] overflow-hidden object-cover opacity-80 shadow-2xl"
        />
        <h1 className="absolute top-[50%] left-[50%] text-white text-4xl">
          Services
        </h1>
      </div>
      <div className=" container grid grid-cols-2 gap-8 mt-14 mb-14 relative">
        <div className="ml-9 relative">
          <img
            src={chef}
            alt="chef"
            className=" w-[700px] h-auto rounded-xl opacity-80 hover:opacity-95 "
          />
          <div className=" text-white absolute top-[22rem] left-16">
            <h1 className=" text-2xl font-semibold">Partner with us</h1>
            <p className="text-xl">
              Join Zoom and reach more customer than ever. We
              <br /> handle delivery, So you can focus on the food.
            </p>
          </div>
        </div>
        <div className="ml-9 relative">
          <img
            src={delivery}
            alt="delivery"
            className=" w-[700px] h-auto rounded-xl opacity-80 hover:opacity-95 relative"
          />
          <div className=" text-white absolute top-[22rem] left-16">
            <h1 className=" text-2xl font-semibold">Ride with us</h1>
            <p className="text-xl">
              The freedom to fit work around your life. Plus great fees,
              <br /> perks and discounts.
            </p>
          </div>
        </div>
        <div className="ml-9 relative">
          <img
            src={teamDinner}
            alt="team dinner"
            className=" w-[700px] h-auto rounded-xl opacity-80 hover:opacity-95 relative"
          />
          <div className=" text-white absolute top-[22rem] left-16">
            <h1 className=" text-2xl font-semibold">Party for work</h1>
            <p className="text-xl">
              Looking for a workplace food solution to reward your team,
              <br />
              boost morale or treat your clients? Our corporate team can help.
            </p>
          </div>
        </div>
        <div className="ml-9 relative">
          <img
            src={giftCard}
            alt="gift card"
            className=" w-[700px] h-auto rounded-xl opacity-80 hover:opacity-95 relative"
          />
          <div className=" text-white absolute top-[22rem] left-16">
            <h1 className=" text-2xl font-semibold">Gift Card</h1>
            <p className="text-xl">
              Looking for an easy way to treat your friends and family? Give the
              gift of great food with a Deliveroo gift card.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
