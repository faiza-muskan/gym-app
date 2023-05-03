import React from "react";
import ConatctForm from "./ConatctForm";
import food from "../../images/food.avif";
import UseHttp from "../../hooks/Use-Http";

const Contact = () => {
  const { sendRequest } = UseHttp();

  const contactHandler = (input) => {
    sendRequest(
      {
        url: "https://react-hooks-687cb-default-rtdb.firebaseio.com/contactInfo.json",
        method: "POST",
        body: input,
        headers: { "Content-Type": "application/json" },
      },
      () => {}
    );
  };

  return (
    <section className="h-[100vh] bg-gradient-to-r from-white to-[#ef98a7] flex flex-col justify-center">
      <div className=" flex flex-row items-center justify-between absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:h-[700px] 2xl:w-[1000px] bg-[#ffffffa0] rounded-3xl xl:h-[500px] xl:w-[800px]  lg:h-[470px] lg:w-[700px]">
        <div>
          <ConatctForm addContact={contactHandler} />
        </div>
        <div>
          <img
            src={food}
            alt="food"
            className=" 2xl:h-[700px] xl:h-[500px] lg:h-[470px] rounded-r-xl  "
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
