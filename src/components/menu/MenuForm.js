import React, { useRef } from "react";

const MenuForm = (props) => {
  const amountRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const amount = +enteredAmount;

    if (amount.length === 0 || amount < 1 || amount > 5) {
      return;
    }

    props.addToCart(amount);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mt-5 mb-2">
        <label className="mr-[1rem]" htmlFor="amount">
          Quantity
        </label>
        <input
          className=" border-[1px] border-neutral-300 p-1 rounded-lg"
          ref={amountRef}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <div>
        <button className=" bg-[#eb0029] py-2 px-6 rounded-full text-white ">
          Add to cart
        </button>
      </div>
    </form>
  );
};

export default MenuForm;
