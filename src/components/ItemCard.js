import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
const ItemCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div>
      <div>
        <h3>
          {data.map((item) => {
            return (
              <div className="border-b-2 m-4 p-4 text-start  relative ">
                <h1>{item.card.info.name}</h1>
                <h2>₹{item.card.info.price / 100}</h2>
                <button
                  className="m-2 p-2 bg-green-300 absolute top-0 right-0 rounded-md"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </div>
            );
          })}
        </h3>
      </div>
    </div>
  );
};
export default ItemCard;
