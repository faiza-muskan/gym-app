import React from "react";
import Modal from "../../modal/Modal";
import Cartitems from "./Cartitems";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItemsState = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  console.log(totalPrice);

  const closeButtonHandler = () => {
    dispatch(uiActions.close());
  };

  const cartItems = (
    <ul className=" overflow-auto max-h-[20rem]">
      {cartItemsState.map((items) => (
        <Cartitems
          id={items.id}
          key={items.id}
          title={items.title}
          quantity={items.quantity}
          total={items.totalPrice}
          price={items.price}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className=" flex flex-row justify-between items-center m-4">
        <span>Total Amount</span>
        <span>£{totalPrice}</span>
      </div>
      <div className=" text-right ">
        <button
          className=" cursor-pointer bg-transparent border-[1px] text-[#EB0029] border-[#EB0029] py-2 px-7 mr-2 rounded-full"
          onClick={closeButtonHandler}
        >
          Close
        </button>
        <button className="cursor-pointer bg-[#EB0029] border-[1px] text-white  py-2 px-7 rounded-full">
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
