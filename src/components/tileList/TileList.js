import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({data}) => {

  /*
  Receive one prop:
    An array of objects to render as a list
    Use the array passed via props to iteratively render Tile components, 
    using each object in the array to pass the name and description props to each rendered Tile component
*/
  return (
    <div>
      {
        data.map((item, index) => {
          return <Tile key={index} name={item.name} description={item.description} />;
          }
        )
      }
    </div>
  );
};
