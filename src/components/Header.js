import { useState, useContext } from "react";
import { headerLogo } from "../utils/common";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  // const { login } = useContext(UserContext);
  const [authbtn, setauthbtn] = useState("login");
  const onlineStatus = useOnlineStaus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between shadow-lg mb-2 mr-2 bg-pink-50">
      <div className="logo-container">
        <img className="w-24" src={headerLogo}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl ">
            <Link to={"/cart"}>Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              authbtn == "login" ? setauthbtn("logout") : setauthbtn("login");
            }}
          >
            {authbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
