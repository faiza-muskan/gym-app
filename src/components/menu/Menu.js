import React from "react";
import MenuList from "./MenuList";

const Menu = () => {
  return (
    <section id="menu" className="my-5 py-6 px-12">
      <h2 className=" text-[#EB0029] font-bold text-3xl my-3 pt-4">Our Menu</h2>
      <div className=" flex flex-row justify-between items-end">
        <div>
          <h1 className=" text-4xl font-extrabold leading-16">
            Menu That Always
            <br /> Makes You Fall In Love
          </h1>
        </div>
      </div>
      <div>
        <MenuList />
      </div>
    </section>
  );
};

export default Menu;
