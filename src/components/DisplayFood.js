import React from "react";

const DisplayFood = (props) => {
  console.log(props.displayData);
  return (
    <>
      {props.displayData.map((items) => (
        <div key={items.id}>
          <div>
            <img src={items.image} alt={items.title} />
          </div>
          <div></div>
          <div>
            <h1>{items.title}</h1>
            <p>£20</p>
            <button>Order now</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default DisplayFood;
