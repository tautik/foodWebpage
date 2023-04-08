import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imagePrefix } from "../utils/constants";

import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [menuList, setMenuList] = useState(null);

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

    setRestaurantData(json.data.cards[0].card.card.info);
    setMenuList(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    // console.log(restaurantData);
  }

  return !restaurantData ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-menu-img">
        <img src={imagePrefix + restaurantData.cloudinaryImageId} alt="" />
      </div>
      <div className="restaurant-menu-basic">
        <h1>Name :{restaurantData.name}</h1>
        <h2> Id:{resId}</h2>
        <h2>Cost for two {restaurantData.costForTwo / 100} </h2>
        <h2>
          Location: {restaurantData?.areaName + ", " + restaurantData?.city}
        </h2>
        <h2></h2>
        <h3>Average Rating :{restaurantData.avgRating}</h3>
      </div>
      <div className="restaurant-menu-items">
        {/* {Object.values(restaurantData?.menu?.items).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))} 
          MAKE THIS CARD
        */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
