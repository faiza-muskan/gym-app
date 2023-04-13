import React, { useEffect, useState } from "react";
import UseHttp from "../hooks/Use-Http";
import DisplayFood from "./DisplayFood";

const MenuList = () => {
  const { sendRequest } = UseHttp();
  const [query, setQuery] = useState("burger");
  const [display, setDisplay] = useState([]);

  const filterMenu = ["burger", "pizza", "sandwich", "drinks", "desserts"];

  const filteredMenu = (value) => {
    setQuery(
      filterMenu.filter((item) => {
        return item === value;
      })[0]
    );
  };

  // useEffect(() => {
  //   const loadData = (data) => {
  //     const response = data.results;
  //     setDisplay(response);
  //   };

  //   sendRequest(
  //     {
  //       url: `https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=25&number=10&apiKey=4ba25e804c0343df95bdd6787954c236`,
  //     },
  //     loadData
  //   );
  // }, [sendRequest, query]);

  return (
    <div className="flex flex-row">
      <div className=" flex flex-col items-start m-3 pt-4 justify-center">
        <button
          onClick={() => filteredMenu("burger")}
          className=" m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]"
        >
          <span className="bg-white rounded-full p-2">🍔</span>
          &nbsp;Burger
        </button>
        <button
          onClick={() => filteredMenu("pizza")}
          className="  m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]"
        >
          <span className="bg-white rounded-full p-2">🍕</span>
          &nbsp;Pizza
        </button>
        <button
          onClick={() => filteredMenu("sandwich")}
          className=" m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]"
        >
          <span className="bg-white rounded-full p-2">🥪</span>
          &nbsp;Sandwich
        </button>
        <button
          onClick={() => filteredMenu("drinks")}
          className=" m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]"
        >
          <span className="bg-white rounded-full p-2">🥤</span>
          &nbsp;Drinks
        </button>
        <button
          onClick={() => filteredMenu("desserts")}
          className="  m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]"
        >
          <span className="bg-white rounded-full p-2">🧁</span>
          &nbsp;Desserts
        </button>
      </div>
      <div className=" flex min-h-screen items-center justify-center ml-2 pl-2">
        <DisplayFood displayData={display} />
      </div>
    </div>
  );
};

export default MenuList;
