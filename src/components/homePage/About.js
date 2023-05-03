import React from "react";
import orderLogo from "../../images/Order food-pana 1.png";
import takeAway from "../../images/Take Away-rafiki 1.png";
import waiter from "../../images/Waiters-rafiki 1.png";

const About = () => {
  return (
    <>
      <section className="container my-20">
        <div className=" w-[50%] m-auto text-center">
          <h2 className=" text-[#EB0029] 2xl:font-bold xl:font-semibold lg:font-medium tracking-wider">
            WHAT WE SERVE
          </h2>
          <h1 className=" 2xl:text-4xl xl:text-3xl lg:text-2xl font-extrabold leading-normal tracking-wider pt-3">
            Your Favourite Food <br />
            Delivery Partner
          </h1>
        </div>
        <div className=" flex flex-row items-center justify-between text-center">
          <div className=" m-4 px-4">
            <img src={orderLogo} alt="food-oder-logo" />
            <h1 className=" 2xl:text-xl xl:text-lg lg:text-base font-bold pt-3 text-[#EB0029]">
              Easy To Order
            </h1>
            <p className=" text-gray-700 pt-2 2xl:text-xl xl:text-base lg:text-sm">
              You only need a few steps in <br />
              ordering food
            </p>
          </div>
          <div className=" m-4 px-4">
            <img src={takeAway} alt="food-oder-logo" />
            <h1 className="2xl:text-xl xl:text-lg lg:text-base font-bold pt-3 text-[#EB0029]">
              Fastest Delivery{" "}
            </h1>
            <p className=" text-gray-700 pt-2 2xl:text-xl xl:text-base lg:text-sm">
              Delivery that is always ontime <br />
              even faster
            </p>
          </div>
          <div className=" m-4 px-4">
            <img src={waiter} alt="food-oder-logo" />
            <h1 className="2xl:text-xl xl:text-lg lg:text-base font-bold pt-3 text-[#EB0029]">
              Best Quality
            </h1>
            <p className=" text-gray-700 pt-2 2xl:text-xl xl:text-base lg:text-sm">
              Not only fast for us quality is also
              <br /> number one
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
