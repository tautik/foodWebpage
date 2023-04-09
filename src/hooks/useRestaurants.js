import React from "react";
import { useState, useEffect } from "react";

const useRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const fetchedData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.111633&lng=72.593405&page_type=DESKTOP_WEB_LISTING"
    );
    json = await fetchedData.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants;
};

export default useRestaurants;
