import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { FiSearch, FiShoppingBag, FiLogIn } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav
      className={
        " container flex flex-row items-center justify-between py-4 px-12 fixed top-0 left-0 right-0 w-full z-50 bg-[#ffffffc9]"
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
          Home
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#EB0029]"
        >
          Services
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#EB0029]"
        >
          Menu
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#EB0029]"
        >
          Contact
        </li>
      </ul>
      <div className=" flex flex-row gap-7 items-center">
        <FiSearch className=" text-2xl text-gray-700 cursor-pointer" />
        <FiShoppingBag className=" text-2xl text-gray-700 cursor-pointer" />
        <button className="flex gap-2 items-center bg-[#EB0029] text-white px-7 py-3 rounded-full hover:bg-[#750518]">
          <FiLogIn />
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
