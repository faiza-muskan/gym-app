import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseHttp from "../hooks/Use-Http";

const MenuList = () => {
  const [clickMenu, setClickMenu] = useState(false);

  const menuHandler = () => {
    setClickMenu(true);
  };
  //   const { sendRequest } = UseHttp();

  //   useEffect(() => {
  //     const loadData = (data) => {
  // data.results
  //     };

  //     sendRequest(
  //       {
  //         url: `https://api.spoonacular.com/recipes/complexSearch?query=${input}&maxFat=25&number=5&apiKey=4ba25e804c0343df95bdd6787954c236`,
  //       },
  //       loadData
  //     );
  //   }, [sendRequest]);

  return (
    <>
      <ul className=" flex flex-col items-start m-3 pt-4">
        <button className=" m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]">
          <li>
            <span className="bg-white rounded-full p-2">🍔</span> &nbsp;
            &nbsp;Burger
          </li>
        </button>
        <button className="  m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]">
          <li>
            <span className="bg-white rounded-full p-2">🍕</span> &nbsp;
            &nbsp;Pizza
          </li>
        </button>
        <button className=" m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]">
          <li>
            <span className="bg-white rounded-full p-2">🍜</span>&nbsp;
            &nbsp;Ramen
          </li>
        </button>
        <button className=" m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]">
          <li>
            <span className="bg-white rounded-full p-2">🥤</span> &nbsp;
            &nbsp;Drinks
          </li>
        </button>
        <button className="  m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]">
          <li>
            <span className="bg-white rounded-full p-2">🧁</span>&nbsp;
            &nbsp;Desserts
          </li>
        </button>
      </ul>
    </>
  );
};

export default MenuList;
