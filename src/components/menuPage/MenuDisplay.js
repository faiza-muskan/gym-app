import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";

import MenuForm from "./MenuForm";

function MenuDisplay(props) {
  const { id, image, title, price, quantity } = props;
  const dispatch = useDispatch();

  const addToCartHandler = (quantity) => {
    dispatch(
      cartAction.addItems({
        title: title,
        id: id,
        price: price,
        quantity: quantity,
      })
    );
  };

  return (
    <div key={id} className=" border shadow-lg rounded-xl w-[329px] h-[450px]">
      <img src={image} alt={title} className="rounded-t-xl w-[329px] h-auto" />
      <div className="pl-2 py-4">
        <h1 className="text-xl font-semibold">{title.slice(0, 20) + "..."}</h1>
        <p>£{price}</p>
      </div>
      <div>
        <MenuForm addToCart={addToCartHandler} />
      </div>
    </div>
  );
}

export default MenuDisplay;
