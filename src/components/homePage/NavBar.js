import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { FiShoppingBag, FiLogIn } from "react-icons/fi";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuatity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <nav className="  w-full">
      <div className=" container flex flex-row items-center justify-between py-4 fixed top-0 left-0 right-0  z-10  bg-[#ffffffc9] px-24">
        <Link to="/">
          <img
            className=" 2xl:w-12 xl:w-11 lg:w-10 h-auto"
            src={logo}
            alt="logo"
          />
        </Link>
        <ul className=" flex gap-9 text-gray-800 2xl:text-[16px] xl:text-[15px] lg:text-[14px] font-small">
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
            <Link to={"/services"}>Services</Link>
          </li>
          <li
            style={{ transition: "all 0.3s" }}
            className=" cursor-pointer hover:text-[#EB0029] scroll-smooth"
          >
            <Link to={"/menu"}>Menu</Link>
          </li>
          <li
            style={{ transition: "all 0.3s" }}
            className=" cursor-pointer hover:text-[#EB0029]"
          >
            <Link to={"/contact"}> Contact</Link>
          </li>
        </ul>
        <div className=" flex flex-row gap-7 items-center">
          <FiShoppingBag
            className=" 2xl:text-2xl xl:text-2xl lg:text-xl text-gray-700 cursor-pointer"
            onClick={toggleCartHandler}
          />
          <div className=" bg-[#EB0029] text-white rounded-full px-1 text-xs absolute 2xl:right-[238px] xl:right-[230px] lg:right-[215px] 2xl:top-[21px] xl: lg:top-[19px]">
            {cartQuantity}
          </div>
          <button className="flex gap-2 items-center bg-[#EB0029] text-white 2xl:px-7 2xl:py-3 xl:px-6 xl:py-2 lg:px-4 lg:py-2 rounded-full hover:bg-[#750518]">
            <FiLogIn />
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
