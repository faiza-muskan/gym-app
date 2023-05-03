import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import burger from "../../images/burger.avif";
import UseHttp from "../../hooks/Use-Http";
import MenuResults from "./MenuResults";
import Loader from "../../modal/Loader";

const Menu = () => {
  const [result, setResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef();
  const [query, setQuery] = useState(searchParams.get("query"));
  const { sendRequest, loading } = UseHttp();

  // useEffect(() => {
  //   setResult([
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

  const loadData = (data) => {
    const response = data.results;
    setResult(response);
  };

  const fetchData = useCallback(async () => {
    sendRequest(
      {
        url: `https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=25&number=10&apiKey=4ba25e804c0343df95bdd6787954c236`,
      },
      loadData
    );
  }, [query, sendRequest]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onSubmit = (e) => {
    e.preventDefault();
    const enteredTitle = inputRef.current.value;
    setQuery(enteredTitle);
    setSearchParams({ query: enteredTitle });
  };

  return (
    <section>
      <div className="relative">
        <img
          src={burger}
          alt="burger"
          className=" h-[500px] w-full overflow-hidden object-cover shadow-2xl"
        />
        <h1 className=" font-bold text-4xl text-center text-white absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Restaurant food and Takeaway
          <br />
          <span className=" text-[#EB0029]">Delivered.</span>
        </h1>
        <form onSubmit={onSubmit}>
          <input
            type="search"
            value={query}
            ref={inputRef}
            placeholder="Search"
            className=" rounded-full py-3 px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-24 xl:w-[40%] 2xl:w-[27%] lg:w-[45%]"
          />
          <button
            type="submit"
            className=" absolute top-1/2 xl:right-[27%] 2xl:right-[35%] lg:right-[24.5%] -translate-x-1/2 -translate-y-1/2 text-white mt-24 bg-[#EB0029] px-6 py-2.5 rounded-full text-sm"
          >
            {loading ? <Loader /> : "search"}
          </button>
        </form>
      </div>
      <div>
        <MenuResults results={result} />
      </div>
    </section>
  );
};

export default Menu;
