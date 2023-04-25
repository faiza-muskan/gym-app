import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";

const MenuItems = (props) => {
  const { title, id, image, price } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartAction.addItems({
        id,
        title,
      })
    );
  };

  return (
    <div key={id} className="border shadow-lg rounded-lg">
      <img src={image} alt={title} className="w-[300px] h-[300px] rounded-xl" />
      <div className="px-2 py-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>{price}</p>
        <div className="mt-5 mb-2">
          <label className="mr-[1rem]" htmlFor="amount">
            Amount
          </label>
          <input
            className=" border-[1px] border-neutral-300 p-1 rounded-lg"
            type="number"
            min="1"
            max="5"
            step="1"
            defaultValue="1"
          />
        </div>
        <div>
          <button
            className=" bg-[#eb0029] py-2 px-6 rounded-full text-white "
            onClick={addToCartHandler}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
