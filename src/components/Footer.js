import React from "react";
import logo from "../images/logo.jpg";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineSend,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" container my-8 py-8 ">
      <div className=" flex flex-row justify-between items-center">
        <div>
          <img src={logo} alt="company logo" className=" w-12 py-8" />
          <p className=" text-gray-800 py-4">
            Our job is to filling your tummy with <br />
            delicious food and fast and <br />
            free delivery.
          </p>
          <div className=" flex flex-row py-4 justify-around cursor-pointer">
            <AiFillInstagram className=" text-[#EB0029] text-2xl" />
            <AiFillFacebook className=" text-[#EB0029] text-2xl" />
            <AiOutlineTwitter className=" text-[#EB0029] text-2xl" />
          </div>
        </div>
        <div>
          <h1 className=" text-xl font-semibold pb-4 ">About</h1>
          <ul className=" text-base text-gray-700 cursor-pointer leading-9">
            <li>About Us</li>
            <li>Feature</li>
            <li>News</li>
            <li>Menu</li>
          </ul>
        </div>
        <div>
          <h1 className=" text-xl font-semibold pb-4">Company</h1>
          <ul className=" text-base text-gray-700 cursor-pointer leading-9">
            <li>Why Foodeli?</li>
            <li>Partner With Us</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h1 className=" text-xl font-semibold pb-4">Support</h1>
          <ul className=" text-base text-gray-700 cursor-pointer leading-9">
            <li>Account</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className=" text-xl font-semibold pb-4 ">Get In Touch</h1>
          <ul className=" text-base text-gray-700 cursor-pointer leading-9">
            <li>Question Or Feedback?</li>
            <li>We'd love to hear from you</li>
            <button className=" bg-slate-50 border-2 border-stone-300 flex flex-row items-center rounded-full px-4 py-1 my-4">
              Email Address
              <span className=" text-[#EB0029] px-4">
                <AiOutlineSend />
              </span>
            </button>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
