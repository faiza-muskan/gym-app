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

  // const loadData = (data) => {
  //   const response = data.results;
  //   setResult(response);
  //   console.log(response);
  // };

  // const fetchData = useCallback(async () => {
  //   sendRequest(
  //     {
  //       url: `https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=25&number=10&apiKey=4ba25e804c0343df95bdd6787954c236`,
  //     },
  //     loadData
  //   );
  // }, [query, sendRequest]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  // console.log(query);

  // const searchHandler = (e) => {
  //   const newQuery = e.target.value;
  //   setQuery(newQuery);
  //   setSearchParams({
  //     query: newQuery,
  //   });
  // };

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
          <span className=" text-[#EB0029]">Delivered.</span>
        </h1>
        <form onSubmit={onSubmit}>
          <input
            type="search"
            ref={inputRef}
            placeholder="Search"
            className=" rounded-full py-3 px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-24 w-[40%]"
          />
          <button className=" absolute top-1/2 left-[66%] -translate-x-1/2 -translate-y-1/2 text-white mt-24 bg-[#EB0029] px-6 py-2.5 rounded-full text-sm">
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
