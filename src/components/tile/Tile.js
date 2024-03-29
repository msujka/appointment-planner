import React from "react";

export const Tile = ({ name, description }) => {
  return (
    /*
    Receive two props: name, description
    Render a <p> element with the name prop. Give this element a className of "tile-title"
    Iterate over the values in the description object, passed in via props, and render a <p> element for each value and give each a className of "tile".
    */
    <div className="tile-container">
      <p className="tile-title">
        {name}
      </p>
      <div>
        {Object.values(description).map((value, index) => {
          return <p key={index} className="tile">{value}</p>;
        })}
        </div>
    </div>
  );
};
