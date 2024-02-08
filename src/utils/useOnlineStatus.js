import { useEffect, useState } from "react";

const useOnlineStaus = () => {
  const [onlineStaus, setOnlineStatus] = useState(true);
  useEffect(() => {
    addEventListener("online", () => {
      setOnlineStatus(true);
    });
    addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);
  return onlineStaus;
};
export default useOnlineStaus;
