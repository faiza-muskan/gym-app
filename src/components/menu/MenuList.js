import React, { useEffect, useState } from "react";
import UseHttp from "../../hooks/Use-Http";
import DisplayFood from "./DisplayFood";

const MenuList = () => {
  const { sendRequest } = UseHttp();
  const [query, setQuery] = useState("burger");
  const [display, setDisplay] = useState([]);

  // useEffect(() => {
  //   setDisplay([
  //     {
  //       id: 642539,
  //       title: "Falafel Burger",
  //       image: "https://spoonacular.com/recipeImages/642539-312x231.png",
  //     },
  //     {
  //       id: 651190,
  //       title: "Masala-Tofu Burger",
  //       image: "https://spoonacular.com/recipeImages/651190-312x231.jpg",
  //     },
  //     {
  //       id: 637631,
  //       title: "Cheesy Bacon Burger with Spicy Chipotle Aiolo Sauce",
  //       image: "https://spoonacular.com/recipeImages/637631-312x231.jpg",
  //     },
  //     {
  //       id: 638771,
  //       title: "Chipotle-Salsa Burger",
  //       image: "https://spoonacular.com/recipeImages/638771-312x231.jpg",
  //     },
  //     {
  //       id: 635345,
  //       title: "Blue Cheese and Mushroom Turkey Burger",
  //       image: "https://spoonacular.com/recipeImages/635345-312x231.jpg",
  //     },
  //     {
  //       id: 664011,
  //       title: "Turkey Burgers",
  //       image: "https://spoonacular.com/recipeImages/664011-312x231.jpg",
  //     },
  //     {
  //       id: 648303,
  //       title: "Itty Bitty Burgers",
  //       image: "https://spoonacular.com/recipeImages/648303-312x231.jpg",
  //     },
  //     {
  //       id: 642695,
  //       title: "Feta Stuffed Burgers",
  //       image: "https://spoonacular.com/recipeImages/642695-312x231.jpg",
  //     },
  //     {
  //       id: 991010,
  //       title: "Chicken Ranch Burgers",
  //       image: "https://spoonacular.com/recipeImages/991010-312x231.jpg",
  //     },
  //     {
  //       id: 649182,
  //       title: "Lamb and Bacon Burgers",
  //       image: "https://spoonacular.com/recipeImages/649182-312x231.jpg",
  //     },
  //   ]);
  // }, []);

  const filterMenu = ["burger", "pizza", "sandwich", "drinks", "desserts"];

  const filteredMenu = (value) => {
    setQuery(
      filterMenu.filter((item) => {
        return item === value;
      })[0]
    );
  };

  useEffect(() => {
    const loadData = (data) => {
      const response = data.results;
      setDisplay(response);
    };

    sendRequest(
      {
        url: `https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=25&number=10&apiKey=4ba25e804c0343df95bdd6787954c236`,
      },
      loadData
    );
  }, [sendRequest, query]);

  return (
    <div className="flex flex-row justify-between items-center">
      <div className=" flex flex-col items-start m-3 pt-4 justify-center">
        <button
          onClick={() => filteredMenu("burger")}
          className=" m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029] 2xl:text-xl xl:text-lg lg:text-base"
        >
          <span className="bg-white rounded-full p-2">🍔</span>
          &nbsp;Burger
        </button>
        <button
          onClick={() => filteredMenu("pizza")}
          className="  m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029] 2xl:text-xl xl:text-lg lg:text-base"
        >
          <span className="bg-white rounded-full p-2">🍕</span>
          &nbsp;Pizza
        </button>
        <button
          onClick={() => filteredMenu("sandwich")}
          className=" m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029] 2xl:text-xl xl:text-lg lg:text-base"
        >
          <span className="bg-white rounded-full p-2">🥪</span>
          &nbsp;Sandwich
        </button>
        <button
          onClick={() => filteredMenu("drinks")}
          className=" m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029] 2xl:text-xl xl:text-lg lg:text-base"
        >
          <span className="bg-white rounded-full p-2">🥤</span>
          &nbsp;Drinks
        </button>
        <button
          onClick={() => filteredMenu("desserts")}
          className="  m-2 p-2 text-xl font-medium hover:bg-[#EB0029] hover:text-white rounded-full pr-20 py-4 focus:text-white focus:bg-[#eb0029] 2xl:text-xl xl:text-lg lg:text-base"
        >
          <span className="bg-white rounded-full p-2">🧁</span>
          &nbsp;Desserts
        </button>
      </div>
      <div className="w-[70%] pt-20 ">
        <DisplayFood displayData={display} />
      </div>
    </div>
  );
};

export default MenuList;
