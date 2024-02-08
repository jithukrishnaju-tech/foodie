import { useEffect, useState } from "react";
import { MENU_API } from "./common";
const useMenu = (param) => {
  const [menuInfo, setMenuInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + param);
    const json = await data.json();
    setMenuInfo(json.data);
  };
  return menuInfo;
};
export default useMenu;
