import React from "react";
import MenuList from "./MenuList";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const Menu = () => {
  return (
    <section className="my-5 px-12">
      <h2 className=" text-[#EB0029] font-bold text-3xl my-3 pt-4">Our Menu</h2>
      <div className=" flex flex-row justify-between items-end">
        <div>
          <h1 className=" text-4xl font-extrabold leading-16">
            Menu That Always
            <br /> Makes You Fall In Love
          </h1>
        </div>
        <div className=" text-2xl">
          <button className=" bg-[#E0E0E0] rounded-full mx-3 p-5 hover:bg-[#a3a3a3]">
            <HiOutlineChevronLeft />
          </button>
          <button className=" bg-[#EB0029] rounded-full mx-3 p-5 text-white hover:bg-[#8c0c22]">
            <HiOutlineChevronRight />
          </button>
        </div>
      </div>
      <div>
        <MenuList />
      </div>
    </section>
  );
};

export default Menu;
