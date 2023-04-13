import React from "react";

const DisplayFood = (props) => {
  console.log(props.displayData);
  return (
    <div className=" flex flex-row items-center gap-2 ">
      {props.displayData.map((items) => (
        <div
          key={items.id}
          className="group relative cursor-pointer items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg "
        >
          <div className="h-96 w-80">
            <img
              src={items.image}
              alt={items.title}
              className="h-full w-full object-fit transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 "
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className=" absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className=" text-md font-bold text-white ">{items.title}</h1>
            <p className="text-white">£20</p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              Order now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayFood;
