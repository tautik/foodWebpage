import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function toogleOnline() {
      setIsOnline(true);
    }
    function toogleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", toogleOnline);
    window.addEventListener("offline", toogleOffline);

    return () => {
      window.removeEventListener("online", toogleOnline);
      window.removeEventListener("offline", toogleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
