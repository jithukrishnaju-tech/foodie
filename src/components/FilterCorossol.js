import { useState } from "react";
import ItemCard from "./ItemCard";
const FilterCorossol = ({ data, items, status }) => {
  const dataArray = data.card.card.itemCards;
  const handleClick = () => status();
  return (
    <div>
      <div className="w-6/12 mx-auto my-4  shadow-lg m-4 p-4 bg-gray-50">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <h1>
            {data.card.card.title}({data.card.card.itemCards.length})
          </h1>
          <span>⬇️</span>
        </div>
        <div>{items && <ItemCard data={dataArray} />}</div>
      </div>
    </div>
  );
};
export default FilterCorossol;
