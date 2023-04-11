import React, { useEffect, useState } from "react";
import UseHttp from "../hooks/Use-Http";

const filterMenu = ["burger", "pizza", "ramen", "drinks", "desserts"];

const MenuList = () => {
  const [query, setQuery] = useState("");
  const { sendRequest } = UseHttp();

  const filteredMenu = (value) => {
    setQuery(
      filterMenu.filter((item) => {
        return item === value;
      })[0]
    );
  };

  useEffect(() => {
    const loadData = (data) => {
      console.log(data.results);
    };

    sendRequest(
      {
        url: `https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=25&number=5&apiKey=4ba25e804c0343df95bdd6787954c236`,
      },
      loadData
    );
  }, [sendRequest, query]);

  return (
    <>
      <div className=" flex flex-col items-start m-3 pt-4">
        <button
          onClick={() => filteredMenu("burger")}
          className=" m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]"
        >
          <span className="bg-white rounded-full p-2">🍔</span> &nbsp;
          &nbsp;Burger
        </button>
        <button
          onClick={() => filteredMenu("pizza")}
          className="  m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]"
        >
          <span className="bg-white rounded-full p-2">🍕</span> &nbsp;
          &nbsp;Pizza
        </button>
        <button
          onClick={() => filteredMenu("ramen")}
          className=" m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]"
        >
          <span className="bg-white rounded-full p-2">🍜</span>&nbsp;
          &nbsp;Ramen
        </button>
        <button
          onClick={() => filteredMenu("drinks")}
          className=" m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]"
        >
          <span className="bg-white rounded-full p-2">🥤</span> &nbsp;
          &nbsp;Drinks
        </button>
        <button
          onClick={() => filteredMenu("desserts")}
          className="  m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029]"
        >
          <span className="bg-white rounded-full p-2">🧁</span>&nbsp;
          &nbsp;Desserts
        </button>
      </div>
    </>
  );
};

export default MenuList;
