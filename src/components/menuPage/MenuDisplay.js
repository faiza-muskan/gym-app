import React from "react";

function MenuDisplay(props) {
  const { id, image, title, price } = props;
  return (
    <div key={id} className=" container border shadow-lg rounded-lg w-[329px]">
      <img src={image} alt={title} className="w-[329px] h-auto rounded-xl" />
      <div className="pl-2 py-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>£{price}</p>
      </div>
    </div>
  );
}

export default MenuDisplay;
