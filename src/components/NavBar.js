import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { FiSearch, FiShoppingBag, FiLogIn } from "react-icons/fi";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuatity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <nav
      className={
        " container flex flex-row items-center justify-between py-4 px-12 fixed top-0 left-0 right-0 w-full z-10 bg-[#ffffffc9]"
      }
    >
      <Link to="/">
        <img className=" w-12 h-auto" src={logo} alt="logo" />
      </Link>
      <ul className=" flex gap-9 text-gray-800 text-[16px] font-small xl-none">
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#EB0029]"
        >
          <Link to={"/"}>Home</Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#EB0029]"
        >
          Services
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#EB0029] scroll-smooth"
        >
          <a href="#menu">Menu</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#EB0029]"
        >
          <Link to={"/contact"}> Contact</Link>
        </li>
      </ul>
      <div className=" flex flex-row gap-7 items-center">
        <div className=" border-2 border-stone-500 flex flex-row px-4 py-1 rounded-full ">
          <input
            className="focus:outline-none"
            type="text"
            placeholder="search"
          />
          <FiSearch className=" text-2xl text-gray-600 cursor-pointer" />
        </div>
        <FiShoppingBag
          className=" text-2xl text-gray-700 cursor-pointer"
          onClick={toggleCartHandler}
        />
        <div className=" bg-[#EB0029] text-white rounded-full px-1 text-xs absolute right-[190px] top-[21px]">
          {cartQuantity}
        </div>
        <button className="flex gap-2 items-center bg-[#EB0029] text-white px-7 py-3 rounded-full hover:bg-[#750518]">
          <FiLogIn />
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
