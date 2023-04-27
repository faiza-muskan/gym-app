import React from "react";
import burger from "../../images/burger.avif";

const Menu = () => {
  return (
    <section>
      <div className="relative">
        <img
          src={burger}
          alt="burger"
          className=" h-[500px] w-full overflow-hidden object-cover shadow-2xl"
        />
        <h1 className=" font-bold text-4xl text-center text-white absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Restaurant food and Takeaway{" "}
          <span className=" text-[#EB0029]">Delivered.</span>
        </h1>
        <form>
          <input
            type="search"
            className="rounded-full py-3 px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-24 w-[40%]"
          />
          <button className=" absolute top-1/2 left-[66%] -translate-x-1/2 -translate-y-1/2 text-white mt-24 bg-[#EB0029] px-6 py-2.5 rounded-full text-sm">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Menu;
