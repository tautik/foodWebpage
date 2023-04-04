import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const filterRestaurant = (searchText) => {
  const filterData = resList.filter((restaurant) => {
    return restaurant.data.name.includes(searchText);
  });
  return filterData;
};

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchText}
          placeholder="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filterData = filterRestaurant(searchText);
            setRestaurantList(filterData);
          }}
        >
          Click Me
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
