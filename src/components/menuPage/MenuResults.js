import React from "react";
import MenuDisplay from "./MenuDisplay";

const MenuResults = (props) => {
  return (
    <div className=" max-w-[1000px] grid grid-cols-3 gap-4 mt-14 mx-auto">
      {props.results.map((items) => (
        <MenuDisplay
          title={items.title}
          id={items.id}
          key={items.id}
          image={items.image}
          price={items.price}
        />
      ))}
    </div>
  );
};

export default MenuResults;
