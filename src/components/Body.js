import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";

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
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //making api call to fetch restaurant details
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const fetchedData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.111633&lng=72.593405&page_type=DESKTOP_WEB_LISTING"
    );
    json = await fetchedData.json();
    setAllRestaurants(json.data.cards[2].data.data.cards);
    setFilteredRestaurantList(json.data.cards[2].data.data.cards);
  }

  //added Return Early Pattern
  if (!allRestaurants) return null;

  //if filteredRestaurant dosent match then do this
  if (filteredRestaurantList?.length === 0)
    return <h2>No Restraunt match your Filter!!</h2>;
  // return <h2>KJHSD</h2>;

  console.log(allRestaurants.length);
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
        {filteredRestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
