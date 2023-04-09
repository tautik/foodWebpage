import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imagePrefix } from "../utils/constants";

import Shimmer from "./Shimmer";
import useRestaurantData from "../hooks/useRestaurantData";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantData = useRestaurantData(resId);

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
          MIGHT NEED TO make New STATE
        */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
