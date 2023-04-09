import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";

import useRestaurants from "../hooks/useRestaurants";

const filterRestaurant = (searchText, allRestaurants) => {
  const filterData = allRestaurants.filter((restaurant) => {
    //making search work for any case
    return restaurant?.data?.name
      ?.toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return filterData;
};

const Body = () => {
  const [filteredRestaurantList, setFilteredRestaurantList] = useState(resList);
  const [searchText, setSearchText] = useState("");

  //getting restaurant data from custom hook
  const allRestaurants = useRestaurants();

  //after allRestaurant updats initialize filteredRestaurantList with new data
  //it happens only once
  useEffect(() => {
    setFilteredRestaurantList(allRestaurants);
  }, [allRestaurants]);

  if (!allRestaurants) return null;

  if (filteredRestaurantList?.length === 0)
    return <h2>No Restraunt match your Filter!!</h2>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
            const filterData = filterRestaurant(searchText, allRestaurants);
            setFilteredRestaurantList(filterData);
          }}
        >
          Click Me
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.data.id}>
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
