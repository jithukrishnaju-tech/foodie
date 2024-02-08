import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-8 m-8">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button className="bg-blue-500 p-2" onClick={handleClear}>
        Clear Cart
      </button>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && <h1>Cart is empty ADD TO CART</h1>}
        <ItemCard data={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
