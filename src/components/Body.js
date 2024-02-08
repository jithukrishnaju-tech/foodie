import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ResCard, { withLabel } from "./ResCard";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const { login } = useContext(UserContext);
  const [meals, setMeals] = useState([]);
  const [text, setText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const ResCardWithLabel = withLabel(ResCard);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.5241391&lng=76.9366376&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMeals(
          data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
        setFilteredRes(
          data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const onlineStatuss = useOnlineStaus();
  if (onlineStatuss === false) {
    return <h1>Looks like you are offline</h1>;
  }
  return meals.length == 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className="border border-black border-solid"
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            className="px-4 m-4 py-1.5 bg-green-300"
            onClick={() => {
              const filteredRes = meals.filter((obj) => {
                return obj.info.name.toLowerCase().includes(text.toLowerCase());
              });
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <div className="m-4 p-4 flex items-center bg-gray-50">
            <button
              className="px-4"
              onClick={() => {
                const Topres = meals.filter((obj) => {
                  return obj.info.avgRating > 4;
                });
                setMeals(Topres);
              }}
            >
              Top Restaurants
            </button>
          </div>
          <div>
            <h1>{login}</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((obj) => (
          <Link
            to={"/restaurant/" + obj.info.id}
            key={obj.info.id}
            className="link-decorator"
          >
            {obj.info.isOpen ? (
              <ResCardWithLabel inputData={obj} />
            ) : (
              <ResCard key={obj.info.id} id={obj.info.id} inputData={obj} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
