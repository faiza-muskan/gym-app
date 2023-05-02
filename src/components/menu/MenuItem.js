import React from "react";
import MenuForm from "./MenuForm.js";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice.js";

const MenuItem = (props) => {
  const { title, id, image, price } = props;

  const dispatch = useDispatch();

  const addToCartHandler = (amount) => {
    dispatch(
      cartAction.addItems({
        quantity: amount,
        id,
        title,
        price,
      })
    );
  };

  return (
    <div key={id} className="border shadow-lg rounded-lg mx-1">
      <img src={image} alt={title} className="w-[312px] h-auto rounded-t-xl" />
      <div className="px-2 py-4">
        <h1 className="text-xl font-semibold">{title.slice(0, 15) + "..."}</h1>
        <p>£{price}</p>
        <MenuForm addToCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default MenuItem;
