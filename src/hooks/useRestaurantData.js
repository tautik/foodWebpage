import { useState, useEffect } from "react";
import { imagePrefix } from "../utils/constants";

const useRestaurantData = (resId) => {
  console.log("dsf", { resId });
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const fetchedData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.111633&lng=72.593405&restaurantId=" +
        resId +
        "&submitAction=ENTER"
    );
    const json = await fetchedData.json();
    setRestaurantData(json?.data?.cards[0]?.card?.card?.info);
  }

  return restaurantData;
};

export default useRestaurantData;
