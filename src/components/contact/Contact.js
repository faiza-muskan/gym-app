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
      <div className=" container flex flex-row items-center justify-between lg:h-[700px] lg:w-[1000px] bg-white rounded-3xl md:h-[600px] md:w-[900px]">
        <div>
          <ConatctForm addContact={contactHandler} />
        </div>
        <div>
          <img
            src={food}
            alt="food"
            className=" h-[800px] rounded-r-xl md:h-[600px] lg:h-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
