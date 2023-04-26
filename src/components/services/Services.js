import React from "react";
import burger from "../../images/burger.avif";

const Services = () => {
  return (
    <>
      <div className="relative">
        <img
          src={burger}
          alt="burger"
          className="w-[100%] h-[35rem] overflow-hidden object-cover opacity-80 shadow-2xl"
        />
        <h1 className="absolute top-[50%] left-[50%] text-white text-4xl">
          Services
        </h1>
      </div>
      <div></div>
    </>
  );
};

export default Services;
