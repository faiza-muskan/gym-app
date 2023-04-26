import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";

const Cartitems = (props) => {
  const dispatch = useDispatch();
  const { title, total, price, quantity, id } = props;

  const removeItems = () => {
    dispatch(cartAction.removeItems(id));
  };

  const addItems = () => {
    dispatch(
      cartAction.addItems({
        id,
        price,
        title,
      })
    );
  };

  return (
    <li className=" flex justify-between items-center border-b-2 border-[#EB0029] py-4 my-4">
      <div>
        <h2 className="font-bold mb-2 text-[#363636]">{title}</h2>
        <div className=" w-[10rem] flex justify-between items-center">
          <span className=" font-bold text-[#EB0029]">£{total}</span>
          <span className=" font-bold border-[1px] border-[#ccc] py-1 px-3 rounded-lg text-[#363636]">
            x {quantity}
          </span>
        </div>
      </div>
      <div className="flex">
        <button
          className=" font-bold text-[1.25rem] text-[#EB0029] border-[1px] border-[#EB0029] w-12 text-center rounded-lg bg-transparent cursor-pointer ml-1 m-1"
          onClick={removeItems}
        >
          −
        </button>
        <button
          className=" font-bold text-[1.25rem] text-[#EB0029] border-[1px] border-[#EB0029] w-12 text-center rounded-lg bg-transparent cursor-pointer ml-1 m-1"
          onClick={addItems}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default Cartitems;
