import React from "react";
import Modal from "../../modal/Modal";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const closeButtonHandler = () => {
    dispatch(uiActions.close());
  };

  return (
    <Modal>
      <div className=" flex flex-row justify-between items-center m-4">
        <span>Total Amount</span>
        <span>£0.00</span>
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
