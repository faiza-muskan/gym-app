import React from "react";
import app from "../../images/app.png";

const Download = () => {
  return (
    <section className=" bg-[#ffddcc54] container my-8 mx-12 py-8 px-8 mr-12 rounded-2xl ">
      <div className=" flex flex-row justify-around relative top-9 ">
        <div className=" mx-4 px-4 py-7">
          <h2 className=" text-[#EB0029] -tracking-tighter font-medium text-lg my-3 py-3 ">
            Download App
          </h2>
          <h1 className=" 2xl:text-4xl xl:text-3xl lg:text-2xl font-bold my-3 py-3">
            Get Started With <br /> Fudo Today!
          </h1>
          <p className=" text-gray-800 my-2 py-2 2xl:text-lg xl:text-base lg:text-sm">
            Discover food wherever and whenever and get
            <br />
            your food delivered quickly.
          </p>
          <button className=" bg-[#EB0029] text-white 2xl:px-12 2xl:py-4 xl:px-10 xl:py-3 lg:px-8 lg:py-3 my-3 rounded-full">
            Get App
          </button>
        </div>
        <div>
          <img src={app} alt="app" />
        </div>
      </div>
    </section>
  );
};

export default Download;
