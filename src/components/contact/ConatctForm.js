import React, { useState } from "react";

const ConatctForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredSelect, setEnteredSelect] = useState("");

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const numberHandler = (e) => {
    setEnteredNumber(e.target.value);
  };

  const messagehandler = (e) => {
    setEnteredMessage(e.target.value);
  };

  const selectHandler = (e) => {
    setEnteredSelect(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.addContact({
      name: enteredName,
      email: enteredEmail,
      number: enteredNumber,
      message: enteredMessage,
      social: enteredSelect,
    });
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNumber("");
    setEnteredMessage("");
  };

  return (
    <form
      className=" max-w-[39rem] md:max-w-[29rem]"
      onSubmit={onSubmitHandler}
    >
      <h1 className=" text-center text-4xl mb-8">Contact Us</h1>
      <input
        value={enteredName}
        onChange={nameHandler}
        type="text"
        placeholder="Enter Name"
        className="w-[100%] py-3 px-5 border-[1px] border-slate-700 rounded-lg my-2 mx-4"
      />
      <input
        value={enteredEmail}
        onChange={emailHandler}
        type="email"
        placeholder="Enter Email"
        className="w-[100%] py-3 px-5 border-[1px] border-slate-700 rounded-lg my-2 mx-4"
      />
      <input
        value={enteredNumber}
        onChange={numberHandler}
        type="number"
        placeholder="Enter Phone Number"
        className="w-[100%] py-3 px-5 border-[1px] border-slate-700 rounded-lg my-2 mx-4"
      />
      <input
        value={enteredMessage}
        onChange={messagehandler}
        type="text"
        placeholder="What you wanna say?"
        className="w-[100%] box-border resize-none py-3 px-5 border-[1px] border-slate-700 rounded-lg my-2 mx-4"
      />
      <select
        id="social-media"
        onSelect={selectHandler}
        className=" rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mx-4 my-2 border-[1px] border-[#EB0029] text-white bg-[#EB0029]"
      >
        <option>How did you find us?</option>
        <option value={enteredSelect}>instagram</option>
        <option value={enteredSelect}>facebook</option>
        <option value={enteredSelect}>twitter</option>
        <option value={enteredSelect}>snapchat</option>
      </select>
      <div className=" w-92 mx-auto flex justify-center items-center">
        <button className=" bg-[#EB0029] text-white  my-6 px-7 py-3 rounded-full hover:bg-[#750518]">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ConatctForm;
