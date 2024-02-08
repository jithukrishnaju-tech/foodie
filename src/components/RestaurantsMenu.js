import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
import { useState } from "react";
import FilterCorossol from "./FilterCorossol";
const RestaurantsMenu = () => {
  const [status, setStatus] = useState(1);
  const { id } = useParams();
  const menuInfo = useMenu(id);
  if (menuInfo === null) return <Shimmer />;
  const {
    name,
    cuisines,
    costForTwoMessage,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = menuInfo?.cards[0]?.card?.card?.info;
  const listArray =
    menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const filteredArray = listArray.filter((item) => {
    return (
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  return (
    <div className="text-center">
      <h1 className="text-center font-bold text-2xl">{name}</h1>
      <h3 className="text-center font-bold text-1xl">{cuisines.join(", ")}</h3>
      {filteredArray.map((item, index) => {
        let id = 0;
        return (
          <FilterCorossol
            data={item}
            items={index === status ? true : false}
            status={() => setStatus(index)}
          />
        );
      })}
    </div>
  );
};
export default RestaurantsMenu;
