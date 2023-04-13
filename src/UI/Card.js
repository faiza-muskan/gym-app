import React from "react";
import foodBowl from "../images/foodBowl.png";

const Card = () => {
  return (
    <div className="w-[200px] h-auto ">
      <img src={foodBowl} alt="bowl of food" />
    </div>
  );
};

export default Card;
