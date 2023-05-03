import React from "react";

function MenuDisplay(props) {
  const { id, image, title, price } = props;
  return (
    <div key={id} className=" border shadow-lg rounded-xl w-[329px] h-auto">
      <img src={image} alt={title} className="rounded-t-xl w-[329px] h-auto" />
      <div className="pl-2 py-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>£{price}</p>
      </div>
    </div>
  );
}

export default MenuDisplay;
